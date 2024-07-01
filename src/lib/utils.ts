import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";
import parsePhoneNumber, { E164Number } from "libphonenumber-js";

const MAX_FILE_SIZE = 3000000;
const ACCEPTED_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatNumber = (number: number) => {
  if (number < 1000) {
    return number.toString();
  } else {
    const formatter = new Intl.NumberFormat("en-US", {
      notation: "compact",
      compactDisplay: "short",
    });
    return formatter.format(number);
  }
};

export const validatePhoneNumber = (phoneNumber: E164Number) => {
  try {
    const parsedNumber = parsePhoneNumber(phoneNumber);
    return parsedNumber?.isValid();
  } catch (error) {
    return false;
  }
};

export const validateImage = (file: File | null): boolean => {
  if (!file || !(file instanceof File)) {
    throw new Error("Invalid file input");
  }
  if (!ACCEPTED_MIME_TYPES.includes(file.type)) {
    throw new Error(
      "Invalid image format. Only JPG, JPEG, PNG, and WEBP are allowed."
    );
  }
  if (file.size > MAX_FILE_SIZE) {
    throw new Error("Image size exceeds maximum limit (5 MB)");
  }
  return true;
};