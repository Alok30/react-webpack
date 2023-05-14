import React from "react";
if(process.env.NODE_ENV!=='production'){
    console.log('running in production mode')
}
const App = () => {
    return <div>
        Hello Webpack 
    </div>
}
export default App;