import StoreLoading from "./StoreLoading";

const LoadingStores = () => {
  return (
    <div className="col-span-2 lg:col-span-5 ml-0 space-y-12 -z-50">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <StoreLoading />
        <StoreLoading />
        <StoreLoading />
        <StoreLoading />
        <StoreLoading />
        <StoreLoading />
      </div>
    </div>
  );
};

export default LoadingStores;
