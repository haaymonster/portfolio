import React from "react";

// about me
const about = {
  title: "about me",
  description:
    "안녕하세요 프론트엔드 ㅇ머라ㅑ더랴ㅓㅣ나ㅓ리머야래ㅓ쟈ㅓ라ㅓ라ㅓㅏㅓㅓㅓㅏㅇㄹ니ㅏㅓ랴더 ㅓ아러 머ㅑ러댈 ",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Hayley Lee",
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
      fieldName: "Email",
      fieldValue: "imhayleylee@gmail.com",
    },
  ],
};

const Contact = () => {
  return (
    <div className="w-full flex justify-center h-full pt-10 ">
      <div className="flex flex-col gap-[30px] ">
        {/* <h2 className="h2">Contact me</h2> */}
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
          description djks fjiejijf jskjfls f jiejofwje j skdjflsjfd
          jeijfiwojeif jskjfdlaksj
        </p>
        <div className="h-[400px] ">
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
      </div>
    </div>
  );
};

export default Contact;
