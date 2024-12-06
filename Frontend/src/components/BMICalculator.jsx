import React, { useState } from "react";
import { toast } from "react-toastify";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!height && !weight && !gender) {
      toast.error("Please enter valid height, weight and gender.");
      return;
    }
    if (!height) {
      toast.error("Please enter valid height.");
      return;
    }
    if (!weight) {
      toast.error("Please enter valid weight.");
      return;
    }
    if (!gender) {
      toast.error("Please select your gender.");
      return;
    }

    const to_meter = height / 100;
    const val = (weight / (to_meter * to_meter)).toFixed(2);
    setBmi(val);

    if (val < 18.5) {
      toast.warning(
        "You are underweight. Consider seeking advide from a healthcare provider."
      );
    } 
    else if (val >= 18.5 && val < 24.9) {
      toast.success(
        "You have normal weight. Keep maintaing a healthy lifestyle."
      );
    } 
    else if (val >= 25 && val < 29.9) {
      toast.warning(
        "You are overweight. Consider seeking advide from a healthcare provider."
      );
    } 
    else {
      toast.error(
        "You are in the obese range. It is recommended to seek advice from a healthcare specialist.."
      );
    }
  };

  return (
    <section className="bmi">
      <h1>BMI CALCULATOR</h1>
      <div className="container">
        <div className="wrapper">
          <form onSubmit={calculateBMI}>
            <div>
              <label>Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <button type="submit">Calculate BMI</button>
          </form>
        </div>
        <div className="wrapper">
          <img src="/bmi.jpg" alt="bmiImage" />
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
