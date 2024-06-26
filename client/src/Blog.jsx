import React from "react";
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
const Blog = () => {
  return (
    <>
    <Header/>
      <section className=" pb-5 pt-10 dark:bg-dark ">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Our Blogs
                </span>
                <h2 className="mb-4 text-3xl font-bold text-blue-600 sm:text-4xl md:text-[40px]">
                  Our Recent News
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="mx-4 flex flex-wrap">
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="The Role of Spending Patterns and Self-Control"
              CardDescription="Spending patterns and self-control are pivotal in managing finances. By recognizing and adjusting spending habits, individuals can avoid unnecessary expenses and allocate more resources towards investments. Self-control is equally important, as it helps in resisting short-term temptations in favor of long-term benefits."
              image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
            />
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="Saving Behavior and Family Financial Socialization"
              CardDescription="Saving behavior is influenced by various factors, including family financial socialization. Learning about finance management from family members can shape one’s approach to saving and investing. Cultivating a habit of regular saving is essential for building a financial cushion and capital for investment."
              image="https://i.ibb.co/Y23YC07/image-02.jpg"
            />
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="Attitude Toward Risk and Investment Choices"
              CardDescription="An individual’s attitude toward risk significantly affects their investment choices. Some may prefer low-risk options like bonds or fixed deposits, while others may opt for high-risk, high-reward investments such as stocks or cryptocurrencies. Understanding one’s risk tolerance is key to selecting suitable investment vehicles."
              image="https://i.ibb.co/7jdcnwn/image-03.jpg"
            />
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Blog;

const BlogCard = ({ image, date, CardTitle, CardDescription }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-10 w-full">
          <div className="mb-8 overflow-hidden rounded">
            <img src={image} alt="" className="w-full" />
          </div>
          <div>
            {date && (
              <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white bg-blue-600">
                {date}
              </span>
            )}
            <h3>
              <a
                href="/#"
                className="mb-4 inline-block text-xl font-semibold hover:text-primary text-black sm:text-2xl lg:text-xl xl:text-2xl"
                
              >
                {CardTitle}
              </a>
            </h3>
            <p className="text-base text-body-color dark:text-dark-6">
              {CardDescription}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
