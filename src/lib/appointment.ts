import { DOCTORS_DATA } from "@/data/doctors";

export type ConsultationType = "In-Person" | "Video Consult";

export const PLATFORM_FEE = 49;

export function getAppointmentDoctor(doctorId: string | null) {
  return DOCTORS_DATA.find((doctor) => doctor.id === doctorId) ?? DOCTORS_DATA[0];
}

export function formatAppointmentDate(date = new Date()) {
  return new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "long", year: "numeric" }).format(date);
}

export function createBookingId() {
  return `UH-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
}
