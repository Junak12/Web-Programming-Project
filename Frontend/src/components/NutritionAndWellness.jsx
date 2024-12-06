import React, { useState } from "react";

const NutritionAndWellness = () => {
  // State variables for user input
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [activityLevel, setActivityLevel] = useState("1.2");
  const [calories, setCalories] = useState(null);

  // Handle input changes
  const handleWeightChange = (e) => setWeight(e.target.value);
  const handleHeightChange = (e) => setHeight(e.target.value);
  const handleAgeChange = (e) => setAge(e.target.value);
  const handleGenderChange = (e) => setGender(e.target.value);
  const handleActivityLevelChange = (e) => setActivityLevel(e.target.value);

  // Function to calculate BMR
  const calculateBMR = () => {
    if (!weight || !height || !age) {
      alert("Please fill in all fields");
      return;
    }

    let bmr;

    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const tdee = bmr * activityLevel;
    setCalories(tdee.toFixed(2)); // Set TDEE rounded to two decimal places

    // Clear inputs after calculation
    setWeight("");
    setHeight("");
    setAge("");
  };

  return (
    <section className="nutrition-wellness">
      <div className="container">
        <h2>Nutrition & Wellness</h2>
        <div className="content">
          {/* Healthy Recipes and Supplement Recommendations Section */}
          <div className="section-with-image">
            <div className="section">
              <h3>Healthy Recipes</h3>
              <p>Discover quick, easy, and nutritious recipes to fuel your fitness journey.</p>
              <ul>
                <li>High-Protein Smoothie</li>
                <li>Quinoa and Veggie Salad</li>
                <li>Grilled Chicken with Steamed Broccoli</li>
                <li>Oatmeal Energy Bars</li>
                <li>Avocado Toast with Poached Eggs</li>
                <li>Salmon and Asparagus</li>
                <li>Chia Seed Pudding</li>
              </ul>
            </div>
            <div className="image-wrapper">
              <img
                src="/recipic.jpg"
                alt="Healthy Recipes"
                className="image"
              />
            </div>
          </div>

          <div className="section-with-image">
            <div className="section">
              <h3>Supplement Recommendations</h3>
              <p>Boost your workouts with these expert-recommended supplements:</p>
              <ul>
                <li>Whey Protein</li>
                <li>Creatine</li>
                <li>BCAAs</li>
                <li>Multivitamins</li>
                <li>Fish Oil</li>
                <li>Pre-workout</li>
                <li>Magnesium</li>
              </ul>
            </div>
            <div className="image-wrapper">
              <img
                src="/supp.jpg"
                alt="Supplements"
                className="image"
              />
            </div>
          </div>

          {/* Calorie Tracker with Image Beside it */}
          <div className="section calorie-tracker">
            <h3>Calorie Tracker</h3>
            <p>Calculate your daily caloric intake to stay on track with your goals.</p>

            <div className="calorie-inputs">
              <div>
                <label>Weight (kg):</label>
                <input
                  type="number"
                  value={weight}
                  onChange={handleWeightChange}
                  placeholder="Enter weight"
                />
              </div>

              <div>
                <label>Height (cm):</label>
                <input
                  type="number"
                  value={height}
                  onChange={handleHeightChange}
                  placeholder="Enter height"
                />
              </div>

              <div>
                <label>Age:</label>
                <input
                  type="number"
                  value={age}
                  onChange={handleAgeChange}
                  placeholder="Enter age"
                />
              </div>

              <div>
                <label>Gender:</label>
                <select value={gender} onChange={handleGenderChange}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div>
                <label>Activity Level:</label>
                <select value={activityLevel} onChange={handleActivityLevelChange}>
                  <option value="1.2">Sedentary (little or no exercise)</option>
                  <option value="1.375">Lightly active (light exercise/sports 1-3 days/week)</option>
                  <option value="1.55">Moderately active (moderate exercise/sports 3-5 days/week)</option>
                  <option value="1.725">Very active (hard exercise/sports 6-7 days a week)</option>
                  <option value="1.9">Super active (very hard exercise & physical job)</option>
                </select>
              </div>

              <button onClick={calculateBMR}>Calculate Calories</button>

              {calories && (
                <div className="calorie-result">
                  <p>Your estimated daily caloric needs (TDEE) is: <strong>{calories} kcal</strong></p>
                </div>
              )}
            </div>

            <div className="image-wrapper">
              <img
                src="/Hell2.jpg"
                alt="Healthy Lifestyle"
                className="image large-image"
              />
              <p className="bodybuilding-message">
                "Building your body requires dedication, consistency, and the right nutrition. Fuel your journey with the best and stay on track!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionAndWellness;
