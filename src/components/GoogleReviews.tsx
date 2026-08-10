import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ExternalLink } from "lucide-react";
import { REVIEWS, REVIEW_STATS, GOOGLE_BUSINESS_URL } from "@/data/reviews";

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"
      />
    </svg>
  );
}

function GoogleStars({ rating }: { rating: number }) {
  return (
    <div
      role="img"
      aria-label={`Rated ${rating} out of 5 stars`}
      className="flex gap-0.5"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-4 ${i < rating ? "fill-[#FBBC05] text-[#FBBC05]" : "fill-muted text-muted"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function GoogleReviews() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;
    setCount(carouselApi.scrollSnapList().length);
    setCurrent(carouselApi.selectedScrollSnap() + 1);
    const onSelect = () => setCurrent(carouselApi.selectedScrollSnap() + 1);
    carouselApi.on("select", onSelect);
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  return (
    <section className="bg-background px-4 py-14 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex items-center gap-3">
            <GoogleLogo className="size-8" />
            <span className="text-lg font-medium text-muted-foreground">
              Google Reviews
            </span>
          </div>
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tighter text-foreground md:text-4xl">
            What Our Clients Say
          </h2>
          <div className="mt-4 flex items-center gap-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="size-5 fill-[#FBBC05] text-[#FBBC05]"
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="text-base text-muted-foreground">
              <span className="font-semibold text-foreground">
                {REVIEW_STATS.averageRating.toFixed(1)}
              </span>{" "}
              based on {REVIEW_STATS.total} Google reviews
            </p>
          </div>
        </div>

        <div className="mt-10">
          <Carousel
            opts={{ loop: true, align: "start" }}
            setApi={setCarouselApi}
            className="mx-auto"
          >
            <CarouselContent>
              {REVIEWS.map((review) => (
                <CarouselItem
                  key={review.author}
                  className="sm:basis-1/2 lg:basis-1/3"
                >
                  <Card className="h-full">
                    <CardContent className="flex h-full flex-col p-6">
                      <div className="flex items-center justify-between">
                        <GoogleStars rating={review.rating} />
                        <span className="text-xs text-muted-foreground">
                          {review.date}
                        </span>
                      </div>
                      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {review.text}
                      </p>
                      <div className="mt-6 flex items-center gap-3 border-t pt-4">
                        <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                          {review.initials}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-foreground">
                            {review.author}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <GoogleLogo className="size-3" />
                            Posted on Google
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          {count > 0 && (
            <div className="mt-4 text-center text-sm text-muted-foreground">
              {current} / {count}
            </div>
          )}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={GOOGLE_BUSINESS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <GoogleLogo className="size-4" />
            See all reviews on Google
            <ExternalLink className="size-3.5 text-muted-foreground" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
