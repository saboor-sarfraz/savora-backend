import { Navigation } from 'lucide-react';
import { PageHeader } from '@/components/site/page-header';
import { SectionHeading } from '@/components/site/section-heading';
import {
  ReservationForm,
  ContactInfo,
} from '@/components/site/contact-sections';
import { RESTAURANT } from '@/lib/data';

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title={
          <>
            Come say <span className="text-gradient-brand">hello</span>
          </>
        }
        description="Questions, catering, or just want to reserve a table? We're here seven days a week — and Savora AI is always one chat away."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
            {/* Info + map */}
            <div className="space-y-6">
              <ContactInfo />

              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(RESTAURANT.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Get directions to Savora at ${RESTAURANT.address} in Google Maps`}
                className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-border/60 bg-card/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <iframe
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(RESTAURANT.address)}&z=15&output=embed`}
                  title={`Map showing ${RESTAURANT.address}`}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  aria-hidden="true"
                  tabIndex={-1}
                  className="pointer-events-none absolute inset-0 h-full w-full border-0 transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />

                <div className="glass-strong pointer-events-none absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl p-3">
                  <div>
                    <p className="text-sm font-semibold">Savora HQ</p>
                    <p className="text-xs text-muted-foreground">
                      {RESTAURANT.address}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-colors group-hover:bg-primary/90">
                    <Navigation className="h-3.5 w-3.5" />
                    Directions
                  </span>
                </div>
              </a>
            </div>

            {/* Reservation form */}
            <div id="reserve">
              <SectionHeading
                eyebrow="Reserve a table"
                title="Book your spot"
                description="Walk-ins welcome, but reservations guarantee your table. We'll confirm by email within the hour."
              />
              <div className="mt-6 rounded-3xl border border-border/60 bg-card/40 p-6 backdrop-blur-sm sm:p-8">
                <ReservationForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
