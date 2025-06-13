import React from "react";

export default function main() {
  return (
    <div>
      <header>
        <h1>Dashboard</h1>
      </header>
      <aside>
        <nav>
          <ul>
            <li>Home</li>
            <li>Settings</li>
            <li>Profile</li>
          </ul>
        </nav>
      </aside>
      <main>
        <section className="cards">
          <div className="card">Card 1</div>
          <div className="card">Card 2</div>
          <div className="card">Card 3</div>
        </section>
        <section className="charts">
          <div className="chart">Chart 1</div>
          <div className="chart">Chart 2</div>
        </section>
      </main>
    </div>
  );
}
