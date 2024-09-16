import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2ページです</h1>
      <Link to="/page2/100">Url Parameter</Link>
      <br />
      <Link to="/page2/100?name=hogehoge">Query Parameter</Link>
    </div>
  );
};
