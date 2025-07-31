"use client";

import React, { useEffect, useState } from "react";

interface UserProfile {
  name: string;
  email: string;
  twitter_profile_url: string;
  contact_number: string;
  university_name: string;
  cracked_builder_name: string;
}

const Admin = () => {
  const [responses, setResponses] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showError, setShowError] = useState(false);

  const CORRECT_PASSWORD = "LOCALHOSTISAWESOME123";

  useEffect(() => {
    // Check if user is already authenticated
    const savedAuth = localStorage.getItem("hacc_admin_auth");
    if (savedAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    const fetchResponses = async () => {
      try {
        const response = await fetch("/api/waitlist");
        if (!response.ok) {
          throw new Error("Failed to fetch responses");
        }
        const data = await response.json();
        setResponses(data);
      } catch (err) {
        setError("Failed to fetch responses");
        console.error("Error fetching responses:", err);
      } finally {
        setLoading(false);
      }
    };

    if (isAuthenticated) {
      fetchResponses();
    }
  }, [isAuthenticated]);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem("hacc_admin_auth", "true");
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("hacc_admin_auth");
  };

  const downloadCSV = () => {
    // Create CSV headers
    const headers = [
      "Name",
      "Email",
      "Twitter Profile",
      "Contact Number",
      "University",
      "Recommended Builder",
    ];

    // Convert responses to CSV rows
    const csvRows = responses.map((response) => [
      response.name,
      response.email,
      response.twitter_profile_url,
      response.contact_number,
      response.university_name,
      response.cracked_builder_name,
    ]);

    // Combine headers and rows
    const csvContent = [
      headers.join(","),
      ...csvRows.map((row) => row.join(",")),
    ].join("\n");

    // Create blob and download
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "waitlist-responses.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9F2E8] py-12 px-4 sm:px-6 lg:px-8">
        {/* Noise overlay */}
        <div
          className="absolute inset-0 z-10 pointer-events-none bg-cover opacity-[0.5]"
          style={{
            backgroundImage: 'url("/ui/noise.png")',
          }}
        />

        <div className="max-w-md w-full space-y-8">
          <div>
            <h2
              className="text-center text-3xl font-extrabold text-gray-900"
              style={{
                fontFamily: "var(--font-mazius-bold)",
              }}
            >
              Admin Access
            </h2>
            <p
              className="mt-2 text-center text-gray-600"
              style={{
                fontFamily: "var(--font-basier-narrow-regular)",
              }}
            >
              Please enter the password to access the admin panel
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handlePasswordSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 tracking-wide focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Enter password"
                  style={{
                    fontFamily: "var(--font-basier-narrow-regular)",
                  }}
                />
              </div>
            </div>
            {showError && (
              <p
                className="text-red-500 text-center"
                style={{
                  fontFamily: "var(--font-basier-narrow-regular)",
                }}
              >
                Incorrect password. Please try again.
              </p>
            )}
            <div>
              <button
                type="submit"
                style={{
                  fontFamily: "var(--font-basier-narrow-medium)",
                }}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Access Admin Panel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  if (loading)
    return (
      <div className="h-screen flex items-center bg-[#F9F2E8] justify-center w-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  if (error) return <div className="p-6 text-red-600">{error}</div>;

  return (
    <div className="p-6 bg-[#F9F2E8] min-h-screen">
      {/* Noise overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none bg-cover opacity-[0.5]"
        style={{
          backgroundImage: 'url("/ui/noise.png")',
        }}
      />

      <div className="flex justify-between items-center mb-6">
        <h1
          className="text-2xl font-bold"
          style={{
            fontFamily: "var(--font-mazius-bold)",
          }}
        >
          Waitlist Responses
        </h1>
        <div className="flex gap-4">
          <button
            onClick={downloadCSV}
            style={{
              fontFamily: "var(--font-basier-narrow-medium)",
            }}
            className="px-4 py-2 text-white bg-gray-600 rounded-lg hover:bg-gray-700 transition-colors duration-200 flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download CSV
          </button>
          <button
            onClick={handleLogout}
            style={{
              fontFamily: "var(--font-basier-narrow-medium)",
            }}
            className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors duration-200"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="overflow-x-auto rounded shadow-lg border border-gray-100">
        <table className="min-w-full bg-white divide-y divide-gray-200">
          <thead>
            <tr>
              <th
                className="px-6 py-4 bg-zinc-200/90 font-bold text-left text-xs text-gray-500 uppercase tracking-wider"
                style={{
                  fontFamily: "var(--font-basier-narrow-medium)",
                }}
              >
                Name
              </th>
              <th
                className="px-6 py-4 bg-zinc-200/90 font-bold text-left text-xs text-gray-500 uppercase tracking-wider"
                style={{
                  fontFamily: "var(--font-basier-narrow-medium)",
                }}
              >
                Email
              </th>
              <th
                className="px-6 py-4 bg-zinc-200/90 font-bold text-left text-xs text-gray-500 uppercase tracking-wider"
                style={{
                  fontFamily: "var(--font-basier-narrow-medium)",
                }}
              >
                Twitter Profile
              </th>
              <th
                className="px-6 py-4 bg-zinc-200/90 font-bold text-left text-xs text-gray-500 uppercase tracking-wider"
                style={{
                  fontFamily: "var(--font-basier-narrow-medium)",
                }}
              >
                Contact Number
              </th>
              <th
                className="px-6 py-4 bg-zinc-200/90 font-bold text-left text-xs text-gray-500 uppercase tracking-wider"
                style={{
                  fontFamily: "var(--font-basier-narrow-medium)",
                }}
              >
                University
              </th>
              <th
                className="px-6 py-4 bg-zinc-200/90 font-bold text-left text-xs text-gray-500 uppercase tracking-wider"
                style={{
                  fontFamily: "var(--font-basier-narrow-medium)",
                }}
              >
                Recommended Builder
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {responses.map((response, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                <td
                  className="px-6 py-4 whitespace-nowrap font-medium tracking-wide text-gray-900"
                  style={{
                    fontFamily: "var(--font-basier-narrow-regular)",
                  }}
                >
                  {response.name}
                </td>
                <td
                  className="px-6 py-4 whitespace-nowrap text-gray-600 tracking-wide"
                  style={{
                    fontFamily: "var(--font-basier-narrow-regular)",
                  }}
                >
                  {response.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {response.twitter_profile_url && (
                    <a
                      href={response.twitter_profile_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 tracking-wide hover:underline transition-colors duration-150"
                      style={{
                        fontFamily: "var(--font-basier-narrow-regular)",
                      }}
                    >
                      {response.twitter_profile_url}
                    </a>
                  )}
                </td>
                <td
                  className="px-6 py-4 whitespace-nowrap tracking-wide text-gray-600"
                  style={{
                    fontFamily: "var(--font-basier-narrow-regular)",
                  }}
                >
                  {response.contact_number}
                </td>
                <td
                  className="px-6 py-4 whitespace-nowrap tracking-wide text-gray-600"
                  style={{
                    fontFamily: "var(--font-basier-narrow-regular)",
                  }}
                >
                  {response.university_name}
                </td>
                <td
                  className="px-6 py-4 whitespace-nowrap tracking-wide text-gray-600"
                  style={{
                    fontFamily: "var(--font-basier-narrow-regular)",
                  }}
                >
                  {response.cracked_builder_name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
