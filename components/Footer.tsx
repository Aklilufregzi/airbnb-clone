import React from "react";

function Footer() {
  return (
    <section className=" bg-slate-200 min-w-screen">
      <div className="py-12 p-10  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div>
          <ul className="text-black mb-3">
            <li className=" font-bold">About</li>
            <li>How Airbnb works</li>
            <li>Newsroom</li>
            <li>Investors</li>
            <li>Airbnb Plus</li>
            <li>Airbnb Luxe</li>
          </ul>
        </div>
        <div>
          <ul className="text-black mb-3">
            <li className=" font-bold">Community</li>
            <li>Accessibility</li>
            <li>This is not a real site</li>
            <li>It's a pretty awesome clone</li>
            <li>Referrals accepted</li>
            <li>Papafam</li>
          </ul>
        </div>
        <div>
          <ul className="text-black mb-3">
            <li className=" font-bold">Host</li>
            <li>Papa React</li>
            <li>Presents</li>
            <li>Zero to Full Stack Hero</li>
            <li>Hundreds of Students</li>
            <li>Join Now</li>
          </ul>
        </div>
        <div>
          <ul className="text-black mb-3">
            <li className=" font-bold">Support</li>
            <li>Help Center</li>
            <li>Trust & Safety</li>
            <li>Say Hi YouTube</li>
            <li>Easter Eggs</li>
            <li>For the Win</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
