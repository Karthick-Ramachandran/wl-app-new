export interface FormData {
  name: string;
  email: string;
  twitterProfile: string;
  contactNumber: string;
  universityName: string;
  crackedBuilderName: string;
}

export interface ValidationError {
  field: string;
  message: string;
}

export const validateForm = (formData: FormData): ValidationError | null => {
  // Name validation
  const name = formData.name.trim();
  if (!name) {
    return { field: 'name', message: 'Name is required!' };
  }
  if (name.length < 2) {
    return { field: 'name', message: 'Name must be at least 2 characters long!' };
  }
  if (name.length > 50) {
    return { field: 'name', message: 'Name must be less than 50 characters!' };
  }
  if (!/^[a-zA-Z\s]+$/.test(name)) {
    return { field: 'name', message: 'Name can only contain letters and spaces!' };
  }

  // Email validation
  const email = formData.email.trim().toLowerCase();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email) {
    return { field: 'email', message: 'Email is required!' };
  }
  if (!emailRegex.test(email)) {
    return { field: 'email', message: 'Please enter a valid email address!' };
  }

  // Cracked builder email or social profile validation
  const crackedBuilderInput = formData.crackedBuilderName.trim();
  const urlRegex = /^(https?:\/\/)?(www\.)?(twitter\.com|x\.com|linkedin\.com(?:\/in)?|github\.com|instagram\.com|facebook\.com)\/[a-zA-Z0-9._-]+\/?$/i;
  
  if (!crackedBuilderInput) {
    return { field: 'crackedBuilderName', message: 'Cracked Builder Email is required!' };
  }
  if (!emailRegex.test(crackedBuilderInput) && !urlRegex.test(crackedBuilderInput)) {
    return { field: 'crackedBuilderName', message: 'Please enter a valid email or social profile URL (Twitter, LinkedIn, GitHub, Instagram, Facebook) for the cracked builder!' };
  }

  // Phone number validation
  const phone = formData.contactNumber.replace(/\s+/g, '');
  const phoneRegex = /^(\+?91)?[6-9]\d{9}$/;
  if (!phone) {
    return { field: 'contactNumber', message: 'Contact Number is required!' };
  }
  if (!phoneRegex.test(phone)) {
    return { field: 'contactNumber', message: 'Please enter a valid Indian phone number!' };
  }

  // University name validation (optional but if provided, validate)
  if (formData.universityName.trim()) {
    const university = formData.universityName.trim();
    if (university.length < 3) {
      return { field: 'universityName', message: 'University name must be at least 3 characters long!' };
    }
    if (university.length > 100) {
      return { field: 'universityName', message: 'University name must be less than 100 characters!' };
    }
  }

  // Twitter profile validation (optional but if provided, validate)
  if (formData.twitterProfile.trim()) {
    const twitter = formData.twitterProfile.trim();
    const twitterRegex = /^https?:\/\/(www\.)?(twitter\.com|x\.com)\/[a-zA-Z0-9_]{1,15}$/;
    if (!twitterRegex.test(twitter)) {
      return { field: 'twitterProfile', message: 'Please enter a valid Twitter profile URL!' };
    }
  }

  return null;
};

export const isFormValid = (formData: FormData): boolean => {
  const requiredFields = ['name', 'email', 'contactNumber', 'crackedBuilderName'];
  return requiredFields.every(field => formData[field as keyof FormData]?.trim() !== '');
}; 