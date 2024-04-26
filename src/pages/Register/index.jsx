import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Button, Input, Heading } from "../../components";

export default function RegisterPage() {
  return (
    <>
      <Helmet>
        <title>eduhack</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>

      {/* registration section */}
      <div className="w-full bg-gray-50 p-[33px] sm:p-5">
        <div className="mb-2 mt-[74px] flex flex-col gap-[31px]">
          {/* branding section */}
          <div className="relative h-[984px]">
            <div className="container-xs absolute bottom-0 left-0 right-0 top-0 my-auto h-[982px] rounded-tl-[20px] rounded-tr-[20px] bg-[url(/public/images/img_macbook_pro_14.png)] bg-cover bg-no-repeat md:h-auto md:p-5">
              <div className="flex w-full flex-col items-end">
                {/* signup form section */}
                <div className="relative z-[1] flex w-[70%] items-start justify-between gap-5 md:w-full md:flex-col">
                  <div className="mt-[99px] flex w-[57%] flex-col items-center gap-[63px] md:w-full sm:gap-[31px]">
                    <Heading as="h1">
                      <span className="text-black-900">Eco&nbsp;</span>
                      <span className="text-green_300">Guardians</span>
                    </Heading>
                    <div className="flex flex-col items-center self-stretch">
                      <Heading size="xs" as="h2" className="!text-gray-600">
                        Create your Free Account
                      </Heading>
                      <div className="mt-[47px] flex flex-col items-start self-stretch">
                        <Text as="p">Full Name</Text>
                        <Input
                          shape="round"
                          type="text"
                          name="fullName"
                          placeholder={`Enter your Fulll Name here`}
                          className="sm:px-5"
                        />
                      </div>
                      <div className="mt-10 flex flex-col items-start self-stretch">
                        <Text as="p">Email</Text>
                        <Input
                          shape="round"
                          type="email"
                          name="email"
                          placeholder={`Enter your Email here`}
                          className="sm:px-5"
                        />
                      </div>
                      <div className="mt-[39px] flex flex-col items-start self-stretch">
                        <Text as="p">Password</Text>
                        <Input
                          shape="round"
                          type="password"
                          name="password"
                          placeholder={`Enter your Password here`}
                          className="sm:px-5"
                        />
                      </div>
                      <Button shape="round" className="mt-10 sm:px-5">
                        Create Account
                      </Button>
                      <Text size="xs" as="p" className="mt-[17px] !text-black-900">
                        <span className="text-blue_gray-400">Already have a account?</span>
                        <span className="text-black-900">&nbsp;</span>
                        <span className="text-gray-600">Log in</span>
                      </Text>
                    </div>
                  </div>
                  <Img
                    src="images/img_hanging_p4.png"
                    alt="hangingpfour"
                    className="h-[601px] w-[26%] object-cover md:w-full"
                  />
                </div>

                {/* background images section */}
                <div className="relative mt-[-14px] h-[157px] self-stretch">
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

          {/* footer section */}
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
