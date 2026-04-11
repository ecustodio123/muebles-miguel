import { useEffect, useMemo, useRef, useState } from "react";
import { useI18n } from "../../lang/i18n";

function LoopCarousel({ items, renderItem, visibleItems = 4, autoplayMs = 2800 }) {
  const { t } = useI18n();
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const dragThreshold = 45;

  const total = items.length;
  const step = Math.max(1, visibleItems);
  const pageCount = total > 0 ? Math.max(1, Math.ceil(total / visibleItems)) : 0;
  const canNavigate = pageCount > 1;
  const activePage = total > 0 ? Math.floor(startIndex / step) % pageCount : 0;

  useEffect(() => {
    if (!canNavigate || isPaused) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setStartIndex((prev) => (prev + step) % total);
    }, autoplayMs);

    return () => window.clearInterval(timer);
  }, [autoplayMs, canNavigate, isPaused, step, total]);

  const visible = useMemo(() => {
    if (!total) {
      return [];
    }

    return Array.from({ length: visibleItems }, (_, offset) => {
      const index = (startIndex + offset) % total;
      return { item: items[index], index: `${index}-${offset}-${startIndex}` };
    });
  }, [items, startIndex, total, visibleItems]);

  const movePrev = () => {
    if (!canNavigate) {
      return;
    }
    setStartIndex((prev) => (prev - step + total) % total);
  };

  const moveNext = () => {
    if (!canNavigate) {
      return;
    }
    setStartIndex((prev) => (prev + step) % total);
  };

  const goToPage = (pageIndex) => {
    if (!total) {
      return;
    }
    setStartIndex((pageIndex * step) % total);
  };

  const onMouseDown = (event) => {
    setIsDragging(true);
    setIsPaused(true);
    startXRef.current = event.clientX;
  };

  const onMouseMove = (event) => {
    if (!isDragging) {
      return;
    }

    const delta = event.clientX - startXRef.current;
    if (delta >= dragThreshold) {
      movePrev();
      startXRef.current = event.clientX;
    }
    if (delta <= -dragThreshold) {
      moveNext();
      startXRef.current = event.clientX;
    }
  };

  const onDragEnd = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  return (
    <div
      className={`loop-carousel ${isDragging ? "dragging" : ""}`.trim()}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        if (!isDragging) {
          setIsPaused(false);
        }
      }}
    >
      <button
        type="button"
        className="loop-carousel__arrow loop-carousel__arrow--prev"
        onClick={movePrev}
        aria-label={t("carousel.previous")}
        disabled={!canNavigate}
      >
        &#8249;
      </button>

      <div
        className="loop-carousel__viewport"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        onTouchStart={(event) => {
          setIsDragging(true);
          setIsPaused(true);
          startXRef.current = event.touches[0].clientX;
        }}
        onTouchMove={(event) => {
          if (!isDragging) {
            return;
          }

          const delta = event.touches[0].clientX - startXRef.current;
          if (delta >= dragThreshold) {
            movePrev();
            startXRef.current = event.touches[0].clientX;
          }
          if (delta <= -dragThreshold) {
            moveNext();
            startXRef.current = event.touches[0].clientX;
          }
        }}
        onTouchEnd={onDragEnd}
      >
        <div className="loop-carousel__track">{visible.map(({ item, index }) => renderItem(item, index))}</div>
      </div>

      <button
        type="button"
        className="loop-carousel__arrow loop-carousel__arrow--next"
        onClick={moveNext}
        aria-label={t("carousel.next")}
        disabled={!canNavigate}
      >
        &#8250;
      </button>

      <div className="loop-carousel__dots" role="tablist" aria-label={t("carousel.controls")}>
        {Array.from({ length: pageCount }, (_, index) => (
          <button
            key={`dot-${index}`}
            type="button"
            className={`loop-carousel__dot ${activePage === index ? "is-active" : ""}`.trim()}
            aria-label={`${t("carousel.goToView")} ${index + 1}`}
            aria-selected={activePage === index}
            onClick={() => goToPage(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default LoopCarousel;
