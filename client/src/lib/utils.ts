import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { DateTime } from 'luxon';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Converts given date, time, and timezone to Asia/Kuwait timezone.
 * 
 * @param {string} time - Time in "HH:mm" 24-hour format (e.g., "16:30")
 * @param {string} date - Date in "YYYY-MM-DD" format (e.g., "2025-08-06")
 * @param {string} timezone - IANA timezone string (e.g., "America/New_York")
 * @returns {object|null} Object with `original` and `kuwait` DateTime strings or `null` on invalid input
 */
export const convertToKuwaitTime = (time: any, date: any, timezone: any) => {
  if (!time || !date || !timezone) {
    return null;
  }

  try {
    const inputDateTimeString = `${date}T${time}`;
    const userDateTime = DateTime.fromISO(inputDateTimeString, { zone: timezone });
    const kuwaitDateTime = userDateTime.setZone('Asia/Kuwait');

    return {
      original: userDateTime.toFormat('ff'),       // e.g., Aug 6, 2025, 4:30 PM
      kuwait: kuwaitDateTime.toFormat('ff'),       // e.g., Aug 7, 2025, 12:30 AM
      originalISO: userDateTime.toISO(),
      kuwaitISO: kuwaitDateTime.toISO(),
    };
  } catch (error) {
    console.error('Invalid input:', error.message);
    return null;
  }
};

export const convertFromKuwaitTime = (time: any, date: any, timezone: any) => {
  if (!time || !date || !timezone) {
    return null;
  }

  try {
    const inputDateTimeString = `${date}T${time}`;
    const kuwaitDateTime = DateTime.fromISO(inputDateTimeString, { zone: 'Asia/Kuwait' });
    const convertedDateTime = kuwaitDateTime.setZone(timezone);

    return {
      kuwait: kuwaitDateTime.toFormat('ff'),            // Original time in Kuwait
      converted: convertedDateTime.toFormat('ff'),      // Converted time in target timezone
      kuwaitISO: kuwaitDateTime.toISO(),
      convertedISO: convertedDateTime.toISO(),
    };
  } catch (error) {
    console.error('Invalid input:', error.message);
    return null;
  }
};