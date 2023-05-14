import React from "react";

if (process.env.NODE_ENV !== "production") {
  console.log("running in production mode");
}

const HomePage = React.lazy(() => import("./Home"));
const App = () => {
  return (
    <React.Suspense fallback={<div>.... Loading</div>}>
      <HomePage />
    </React.Suspense>
  );
};
export default App;
