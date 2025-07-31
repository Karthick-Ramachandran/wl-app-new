import { NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString:
    "postgresql://neondb_owner:npg_yVBDg5Otdo6k@ep-late-dew-a1zfgrg7-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      twitterProfile,
      contactNumber,
      universityName,
      crackedBuilderName,
    } = body;

    // Backend validation
    const validationErrors = [];

    // Required fields validation
    if (!name?.trim()) validationErrors.push("Name is required");
    if (!email?.trim()) validationErrors.push("Email is required");
    if (!contactNumber?.trim()) validationErrors.push("Contact number is required");
    if (!crackedBuilderName?.trim()) validationErrors.push("Cracked builder email or social profile URL is required");

    // Name validation
    if (name?.trim()) {
      const trimmedName = name.trim();
      if (trimmedName.length < 2) validationErrors.push("Name must be at least 2 characters");
      if (trimmedName.length > 50) validationErrors.push("Name must be less than 50 characters");
      if (!/^[a-zA-Z\s]+$/.test(trimmedName)) validationErrors.push("Name can only contain letters and spaces");
    }

    // Email validation
    if (email?.trim()) {
      const trimmedEmail = email.trim().toLowerCase();
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(trimmedEmail)) validationErrors.push("Invalid email format");
    }

    // Cracked builder email or social profile validation
    if (crackedBuilderName?.trim()) {
      const trimmedCrackedInput = crackedBuilderName.trim();
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const socialUrlRegex = /^(https?:\/\/)?(www\.)?(twitter\.com|x\.com|linkedin\.com(?:\/in)?|github\.com|instagram\.com|facebook\.com)\/[a-zA-Z0-9._-]+\/?$/i;
      
      if (!emailRegex.test(trimmedCrackedInput) && !socialUrlRegex.test(trimmedCrackedInput)) {
        validationErrors.push("Invalid cracked builder email or social profile URL format");
      }
    }

    // Phone validation
    if (contactNumber?.trim()) {
      const phone = contactNumber.replace(/\s+/g, '');
      const phoneRegex = /^(\+?91)?[6-9]\d{9}$/;
      if (!phoneRegex.test(phone)) validationErrors.push("Invalid Indian phone number format");
    }

    // University validation (optional)
    if (universityName?.trim()) {
      const trimmedUniversity = universityName.trim();
      if (trimmedUniversity.length < 3) validationErrors.push("University name must be at least 3 characters");
      if (trimmedUniversity.length > 100) validationErrors.push("University name must be less than 100 characters");
    }

    // Twitter validation (optional)
    if (twitterProfile?.trim()) {
      const trimmedTwitter = twitterProfile.trim();
      const twitterRegex = /^https?:\/\/(www\.)?(twitter\.com|x\.com)\/[a-zA-Z0-9_]{1,15}$/;
      if (!twitterRegex.test(trimmedTwitter)) validationErrors.push("Invalid Twitter profile URL");
    }

    // Return validation errors if any
    if (validationErrors.length > 0) {
      return NextResponse.json(
        { success: false, message: validationErrors.join(", ") },
        { status: 400 }
      );
    }

    // Sanitize and prepare data
    const sanitizedData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      twitterProfile: twitterProfile?.trim() || null,
      contactNumber: contactNumber.replace(/\s+/g, ''),
      universityName: universityName?.trim() || null,
      crackedBuilderName: crackedBuilderName.trim(), // Keep original case for URLs
    };

    const query = `
      INSERT INTO user_profiles (
        name, 
        email, 
        twitter_profile_url, 
        contact_number, 
        university_name, 
        cracked_builder_name
      ) VALUES ($1, $2, $3, $4, $5, $6)
    `;

    const values = [
      sanitizedData.name,
      sanitizedData.email,
      sanitizedData.twitterProfile,
      sanitizedData.contactNumber,
      sanitizedData.universityName,
      sanitizedData.crackedBuilderName,
    ];

    const client = await pool.connect();
    try {
      await client.query(query, values);
      return NextResponse.json({ success: true });
    } catch (error: unknown) {
      if (error && typeof error === 'object' && 'code' in error && error.code === '23505') {
        // Unique constraint violation
        return NextResponse.json(
          { success: false, message: "You are already on the waitlist!" },
          { status: 409 }
        );
      }
      throw error;
    } finally {
      client.release();
    }
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const client = await pool.connect();
    try {
      const result = await client.query("SELECT * FROM user_profiles");
      return NextResponse.json(result.rows);
    } finally {
      client.release();
    }
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Failed to fetch responses" },
      { status: 500 }
    );
  }
}
