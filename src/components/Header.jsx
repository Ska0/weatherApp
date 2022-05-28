import logo from "../assets/logo.svg";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getForecast, getWeather } from "../features/weatherSlice";

function Header() {
  const dispatch = useDispatch();
  const [text, setText] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(getForecast(text));
    dispatch(getWeather(text));
    setText("");
  };

  return (
    <header>
      <img src={logo} className="logo" alt="logo" />
      <>
        <form onSubmit={onSubmit} id="search-form">
          <input
            type="text"
            id="text"
            name="text"
            placeholder="City, State, or Zip/Postal Code"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit" className="search-button">
            Look Up Weather
          </button>
        </form>
      </>
    </header>
  );
}

export default Header;
