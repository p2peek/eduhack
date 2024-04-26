import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Button, Input, Heading } from "../../components";

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>eduhack</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>

      {/* login page section */}
      <div className="w-full bg-gray-50 p-[33px] sm:p-5">
        {/* footer section */}
        <div className="mb-2 mt-[74px] flex flex-col gap-[31px]">
          {/* main content section */}
          <div className="relative h-[984px]">
            {/* image decorations section */}
            <div className="container-xs absolute bottom-0 left-0 right-0 top-0 my-auto h-[982px] rounded-tl-[20px] rounded-tr-[20px] bg-white-A700 bg-[url(/public/images/img_macbook_pro_14.png)] bg-cover bg-no-repeat md:h-auto md:p-5">
              {/* login form section */}
              <div className="flex w-full flex-col items-end">
                {/* login header section */}
                <div className="relative z-[1] flex w-[70%] items-start justify-between gap-5 md:w-full md:flex-col">
                  {/* login fields section */}
                  <div className="mt-24 flex w-[57%] flex-col items-center md:w-full">
                    <Img
                      src="images/img_image_1.png"
                      alt="imageone"
                      className="ml-[164px] h-[221px] w-[221px] self-start object-cover md:ml-0"
                    />
                    <Heading as="h1" className="mt-[39px]">
                      <span className="text-black-900">Eco&nbsp;</span>
                      <span className="text-green_300">Guardians</span>
                    </Heading>

                    {/* input fields section */}
                    <div className="mt-[39px] flex flex-col items-center gap-[39px] self-stretch">
                      <div className="flex flex-col items-start self-stretch">
                        <Text as="p">Email</Text>
                        <Input
                          color="blue_gray_200_66"
                          shape="round"
                          type="email"
                          name="email"
                          placeholder={`Enter your Email here`}
                          className="sm:px-5"
                        />
                      </div>
                      <div className="flex flex-col items-start self-stretch">
                        <Text as="p">Password</Text>
                        <Input
                          color="blue_gray_200_66"
                          shape="round"
                          type="password"
                          name="password"
                          placeholder={`Enter your Password here`}
                          className="sm:px-5"
                        />
                      </div>

                      {/* login button section */}
                      <Button shape="round" className="sm:px-5">
                        Login
                      </Button>
                    </div>

                    {/* registration prompt section */}
                    <Text size="xs" as="p" className="mt-[15px] !text-black-900">
                      <span className="text-blue_gray-400">Dont have an account?</span>
                      <span className="text-black-900">&nbsp;</span>
                      <span className="text-gray-600">Register</span>
                    </Text>
                  </div>
                  <Img
                    src="images/img_hanging_p4.png"
                    alt="hangingpfour"
                    className="h-[601px] w-[26%] object-cover md:w-full"
                  />
                </div>

                {/* background images section */}
                <div className="relative mt-[-22px] h-[157px] self-stretch">
                  <Img
                    src="images/img_soil_bg.png"
                    alt="soilbg"
                    className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[157px] w-full object-cover"
                  />
                  <Img
                    src="images/img_soil.png"
                    alt="soil"
                    className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[157px] w-full object-cover"
                  />
                </div>
              </div>
              <Img
                src="images/img_plant_down_left.svg"
                alt="plantdownleft"
                className="absolute bottom-[29.00px] left-[0.00px] m-auto h-[366px] w-[15%]"
              />
              <Img
                src="images/img_plant_down_right.svg"
                alt="plantdown"
                className="absolute bottom-[5%] right-[0.00px] z-[2] m-auto h-[290px] w-[24%]"
              />
            </div>
            <Img
              src="images/img_hanging_p1.svg"
              alt="hangingpone"
              className="absolute left-[0.00px] top-[0.00px] m-auto h-[475px] w-[15%]"
            />
          </div>

          {/* footer text section */}
          <div className="container-xs flex flex-col items-end px-[9px] md:p-5">
            <Text size="md" as="p" className="!font-roboto !text-blue_gray-400_01">
              www.nickelfox.com
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}
