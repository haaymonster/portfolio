import React from "react";

// about me
const about = {
  title: "about me",
  description: " ",
  info: [
    {
      fieldName: "Name",
      fieldValue: "이해령",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+82) 010-7631-2607",
    },

    {
      fieldName: "Experience",
      fieldValue: "2 Years",
    },
    {
      fieldName: "Birth",
      fieldValue: "1997.",
    },
    {
      fieldName: "Email",
      fieldValue: "imhayleylee@gmail.com",
    },
  ],
};

const Contact = () => {
  return (
    <div className="w-full flex justify-center h-full pt-10 ">
      <div className="flex flex-col gap-[30px] ">
        <h2 className="h2 mx-auto xl:mx-0">Contact me</h2>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-3xl">
          👇🏻👇🏻👇🏻
        </p>
        <div className=" ">
          <ul className="grid grid-col-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
            {about.info.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center justify-center xl:justify-start gap-4"
                >
                  <span className="text-white/60">{item.fieldName}</span>
                  <span className="text-xl">{item.fieldValue}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <span className="text-9xl mt-6 mx-auto xl:mx-0">👩🏻‍💻</span>
      </div>
    </div>
  );
};

export default Contact;
