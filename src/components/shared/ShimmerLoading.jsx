import { ShimmerSimpleGallery } from "react-shimmer-effects";

function ShimmerLoading() {
  return (
    <section className="shimmer-loader">
      <ShimmerSimpleGallery card imageHeight={225} caption row={2} />
    </section>
  );
}

export default ShimmerLoading;
