import { useState, type FormEvent } from "react";

const services = [
  "Smile Makeover",
  "Veneers",
  "Teeth Whitening",
  "Implants",
  "Orthodontics",
  "General Check-up",
];

export function BookingForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: services[0],
    date: "",
    time: "",
    notes: "",
  });

  const update = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const fieldClass =
    "w-full rounded-lg border border-border bg-card/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

  if (sent) {
    return (
      <div className="rounded-2xl border border-primary/40 bg-card/70 p-10 text-center backdrop-blur-sm">
        <p className="text-2xl font-semibold text-primary">Request received</p>
        <p className="mt-3 text-sm text-muted-foreground">
          Thank you {form.name || "for reaching out"} — our concierge team will confirm
          your appointment within one hour.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-6 rounded-full border border-border px-6 py-2 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          Book another visit
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-border bg-card/70 p-6 backdrop-blur-sm sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
            Full name
          </label>
          <input
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Your name"
            className={fieldClass}
          />
        </div>
        <div className="sm:col-span-1">
          <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
            Phone
          </label>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+20 100 000 0000"
            className={fieldClass}
          />
        </div>
        <div>
          <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
            Service
          </label>
          <select
            value={form.service}
            onChange={(e) => update("service", e.target.value)}
            className={fieldClass}
          >
            {services.map((s) => (
              <option key={s} value={s} className="bg-card">
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
              Date
            </label>
            <input
              required
              type="date"
              value={form.date}
              onChange={(e) => update("date", e.target.value)}
              className={fieldClass}
            />
          </div>
          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
              Time
            </label>
            <input
              required
              type="time"
              value={form.time}
              onChange={(e) => update("time", e.target.value)}
              className={fieldClass}
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
            Notes
          </label>
          <textarea
            rows={3}
            value={form.notes}
            onChange={(e) => update("notes", e.target.value)}
            placeholder="Tell us what you'd like to change about your smile"
            className={fieldClass}
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.01]"
      >
        Confirm Booking
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        We reply within one hour during clinic hours.
      </p>
    </form>
  );
}
