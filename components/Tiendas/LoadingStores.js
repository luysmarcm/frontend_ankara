import StoreLoading from "./StoreLoading";

const LoadingStores = () => {
  return (
    <div className="px-6 lg:px-16 my-10  grid grid-cols-3 gap-10 justify-around">
      <StoreLoading />
      <StoreLoading />
      <StoreLoading />
      <StoreLoading />
      <StoreLoading />
      <StoreLoading />
    </div>
  );
};

export default LoadingStores;
