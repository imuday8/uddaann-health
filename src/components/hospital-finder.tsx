"use client";

import React, { useState, useMemo } from "react";
import { HOSPITALS_DATA, Hospital } from "../data/hospitals";
import { Search, MapPin, Phone, Star, Clock, AlertTriangle, ShieldCheck, Navigation, Calendar, Bed, Activity, Filter, Check } from "lucide-react";

interface HospitalFinderProps {
  onBookHospitalAppointment?: (hospitalName: string) => void;
}

export const HospitalFinder: React.FC<HospitalFinderProps> = ({ onBookHospitalAppointment }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("All");
  const [selectedSpeciality, setSelectedSpeciality] = useState("All");
  const [filterEmergencyOnly, setFilterEmergencyOnly] = useState(false);
  const [filterIcuOnly, setFilterIcuOnly] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState<Hospital>(HOSPITALS_DATA[0]);

  // Extract unique cities and specialities
  const cities = useMemo(() => {
    const set = new Set<string>();
    HOSPITALS_DATA.forEach((h) => set.add(h.city));
    return ["All", ...Array.from(set)];
  }, []);

  const specialities = useMemo(() => {
    const set = new Set<string>();
    HOSPITALS_DATA.forEach((h) => h.specialities.forEach((s) => set.add(s)));
    return ["All", ...Array.from(set)];
  }, []);

  // Filter logic
  const filteredHospitals = useMemo(() => {
    return HOSPITALS_DATA.filter((hospital) => {
      const matchesSearch =
        hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hospital.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hospital.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hospital.specialities.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCity = selectedCity === "All" || hospital.city === selectedCity;
      const matchesSpeciality =
        selectedSpeciality === "All" || hospital.specialities.includes(selectedSpeciality);
      const matchesEmergency = !filterEmergencyOnly || hospital.emergencyAvailable;
      const matchesIcu = !filterIcuOnly || hospital.icuBedsAvailable > 0;

      return matchesSearch && matchesCity && matchesSpeciality && matchesEmergency && matchesIcu;
    });
  }, [searchTerm, selectedCity, selectedSpeciality, filterEmergencyOnly, filterIcuOnly]);

  return (
    <div className="space-y-6">
      {/* Header & Filter Controls Bar */}
      <div className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <span>Find Nearby AI-Connected Hospitals</span>
              <span className="px-3 py-1 text-xs bg-[#157BFF]/10 text-[#157BFF] font-semibold rounded-full border border-[#157BFF]/20">
                {filteredHospitals.length} Available
              </span>
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Search top hospitals with live ICU bed metrics, wait times, and instant directions.
            </p>
          </div>
        </div>

        {/* Filter inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Instant Search Bar */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search hospital name, city..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#157BFF]"
            />
          </div>

          {/* City Filter */}
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#157BFF]"
          >
            {cities.map((city) => (
              <option key={city} value={city}>
                City: {city}
              </option>
            ))}
          </select>

          {/* Speciality Filter */}
          <select
            value={selectedSpeciality}
            onChange={(e) => setSelectedSpeciality(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#157BFF]"
          >
            {specialities.map((spec) => (
              <option key={spec} value={spec}>
                Speciality: {spec}
              </option>
            ))}
          </select>

          {/* Toggle Switches */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilterEmergencyOnly(!filterEmergencyOnly)}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 border ${
                filterEmergencyOnly
                  ? "bg-red-600 text-white border-red-600 shadow-md"
                  : "bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800"
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Emergency 24/7</span>
            </button>

            <button
              onClick={() => setFilterIcuOnly(!filterIcuOnly)}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 border ${
                filterIcuOnly
                  ? "bg-emerald-600 text-white border-emerald-600 shadow-md"
                  : "bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800"
              }`}
            >
              <Bed className="w-3.5 h-3.5" />
              <span>ICU Free</span>
            </button>
          </div>
        </div>
      </div>

      {/* Split View: List (Left) & Map View (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Cards List */}
        <div className="lg:col-span-7 space-y-4 max-h-[750px] overflow-y-auto pr-1">
          {filteredHospitals.length === 0 ? (
            <div className="glass-card rounded-3xl p-12 text-center text-slate-500">
              <Search className="w-12 h-12 mx-auto text-slate-400 mb-3" />
              <p className="font-bold text-lg text-slate-700 dark:text-slate-200">No hospitals found matching your criteria</p>
              <p className="text-sm mt-1">Try relaxing filters or searching another city.</p>
            </div>
          ) : (
            filteredHospitals.map((hospital) => {
              const isSelected = selectedHospital.id === hospital.id;
              return (
                <div
                  key={hospital.id}
                  onClick={() => setSelectedHospital(hospital)}
                  className={`glass-card rounded-2xl p-5 border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "border-[#157BFF] ring-2 ring-[#157BFF]/30 shadow-xl scale-[1.01]"
                      : "border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Hospital Image */}
                    <div className="relative w-full sm:w-36 h-36 rounded-xl overflow-hidden shrink-0 bg-slate-200">
                      <img
                        src={hospital.image}
                        alt={hospital.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-2 left-2 px-2 py-0.5 text-[10px] font-bold rounded-md bg-slate-950/80 text-white backdrop-blur-md">
                        {hospital.distanceKm} km away
                      </span>
                    </div>

                    {/* Content Details */}
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="text-lg font-bold font-heading text-slate-900 dark:text-white hover:text-[#157BFF] transition-colors">
                            {hospital.name}
                          </h4>
                          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                            <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                            <span>{hospital.address}</span>
                          </div>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold border border-amber-500/20 shrink-0">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          <span>{hospital.rating}</span>
                          <span className="text-[10px] text-slate-400 font-normal">({hospital.reviewsCount})</span>
                        </div>
                      </div>

                      {/* Live Badges */}
                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        {hospital.emergencyAvailable && (
                          <span className="px-2.5 py-0.5 text-[11px] font-bold rounded-md bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 flex items-center gap-1">
                            <AlertTriangle className="w-3 h-3" /> 24/7 Emergency
                          </span>
                        )}

                        <span className="px-2.5 py-0.5 text-[11px] font-bold rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                          <Bed className="w-3 h-3" /> {hospital.icuBedsAvailable} ICU Beds Free
                        </span>

                        <span className="px-2.5 py-0.5 text-[11px] font-medium rounded-md bg-blue-500/10 text-[#157BFF] border border-[#157BFF]/20 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> ~{hospital.waitingTimeMins}m Wait
                        </span>
                      </div>

                      {/* Specialities preview */}
                      <div className="text-xs text-slate-500 dark:text-slate-400 pt-1 line-clamp-1">
                        <strong className="text-slate-700 dark:text-slate-300">Specialities:</strong>{" "}
                        {hospital.specialities.join(" • ")}
                      </div>

                      {/* Action Buttons */}
                      <div className="pt-2 flex items-center gap-2">
                        <a
                          href={`https://maps.google.com/?q=${encodeURIComponent(hospital.name + " " + hospital.address)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="px-3.5 py-2 text-xs font-bold text-slate-800 dark:text-slate-100 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5"
                        >
                          <Navigation className="w-3.5 h-3.5 text-[#157BFF]" />
                          <span>Get Directions</span>
                        </a>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (onBookHospitalAppointment) onBookHospitalAppointment(hospital.name);
                          }}
                          className="px-4 py-2 text-xs font-bold text-white bg-[#157BFF] rounded-xl hover:bg-blue-600 transition-colors shadow-md flex items-center gap-1.5"
                        >
                          <Calendar className="w-3.5 h-3.5" />
                          <span>Book Appointment</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Right Column: Google Maps Style Interactive Canvas */}
        <div className="lg:col-span-5 hidden lg:block">
          <div className="sticky top-28 glass-card rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-2xl h-[720px] flex flex-col">
            {/* Map Header */}
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-[#157BFF]" />
                <span className="text-xs font-bold uppercase tracking-wider font-mono">Uddaann Map Intelligence</span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400">GPS ACCURACY ±3M</span>
            </div>

            {/* Simulated Interactive Map Screen */}
            <div className="flex-1 bg-slate-950 relative overflow-hidden flex items-center justify-center">
              {/* Map grid lines simulation */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "radial-gradient(#157BFF 1px, transparent 1px)",
                  backgroundSize: "24px 24px"
                }}
              />

              {/* Center Map Info Overlay */}
              <div className="absolute top-4 left-4 right-4 p-3 rounded-2xl glass-card border border-slate-800 bg-slate-900/90 text-white z-10 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#157BFF]/20 text-[#157BFF] flex items-center justify-center shrink-0 font-bold text-lg">
                    {selectedHospital.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-sm font-bold text-white truncate">{selectedHospital.name}</h5>
                    <p className="text-xs text-slate-400 truncate">{selectedHospital.address}</p>
                  </div>
                </div>
              </div>

              {/* Animated Map Pins */}
              <div className="relative w-full h-full">
                {filteredHospitals.slice(0, 8).map((h, i) => {
                  const isSelected = h.id === selectedHospital.id;
                  // Position coordinates pseudo generator
                  const top = 25 + ((i * 17) % 55) + "%";
                  const left = 20 + ((i * 23) % 65) + "%";

                  return (
                    <div
                      key={h.id}
                      onClick={() => setSelectedHospital(h)}
                      style={{ top, left }}
                      className={`absolute cursor-pointer transition-all duration-300 -translate-x-1/2 -translate-y-1/2 group z-20 ${
                        isSelected ? "scale-125 z-30" : "hover:scale-110"
                      }`}
                    >
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-extrabold shadow-2xl flex items-center gap-1.5 border ${
                          isSelected
                            ? "bg-[#157BFF] text-white border-white ring-4 ring-[#157BFF]/40"
                            : "bg-slate-900 text-slate-200 border-slate-700"
                        }`}
                      >
                        <MapPin className="w-3.5 h-3.5 text-red-400" />
                        <span className="max-w-[100px] truncate">{h.name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Quick Call & Navigation Dock */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-card bg-slate-900/90 text-white z-10 backdrop-blur-md border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-slate-400">Emergency Desk Direct Line</div>
                  <div className="text-sm font-bold font-mono text-emerald-400">{selectedHospital.phone}</div>
                </div>
                <a
                  href={`tel:${selectedHospital.phone}`}
                  className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-500 transition-colors shadow-lg flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Hospital</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
