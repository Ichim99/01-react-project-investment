import logo from "../assets/investment-calculator-logo.png"

export default function Header() {
    return (
        <header id="header">
            <img src={logo} alt="Investment Calculator Logo"/>
            <h2>Investment Calculator</h2>
        </header>
    );
}