import { FormData } from '../utils/validation';

export const submitWaitlistForm = async (formData: FormData): Promise<Response> => {
  return fetch("/api/waitlist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
};

export const shareLink = async (): Promise<void> => {
  try {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      await navigator.share({
        title: "THE GREAT RESIDENTIAL H/ACC by Localhost",
        url: window.location.href,
      });
    } else {
      await navigator.clipboard.writeText(window.location.href);
    }
  } catch (error) {
    console.error("Error sharing link:", error);
    throw error;
  }
}; 