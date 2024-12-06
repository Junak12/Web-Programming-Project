import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Unlock your full potential with our top-tier workout sessions designed
          to challenge and inspire you.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Transform your fitness journey with our expertly curated bootcamps,
          tailored for every fitness level.
        </p>
        <div className="bootcamps">
          <div>
            <h4>High-Intensity Interval Training (HIIT)</h4>
            <p>
              Experience a heart-pumping, calorie-burning workout that pushes
              your limits in short bursts of intense activity.
            </p>
          </div>
          <div>
            <h4>Strength and Conditioning</h4>
            <p>
              Build strength and endurance with a program that combines
              resistance training and functional movements.
            </p>
          </div>
          <div>
            <h4>Yoga and Flexibility</h4>
            <p>
              Improve flexibility, balance, and mental clarity with sessions
              that focus on mindfulness and core strength.
            </p>
          </div>
          <div>
            <h4>Cardio Kickboxing</h4>
            <p>
              Kick your way to fitness with this dynamic workout that blends
              martial arts and cardio exercises.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
