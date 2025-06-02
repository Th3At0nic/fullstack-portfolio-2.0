import { useEffect, useState } from "react";
import { Button } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import {
  useGetProfileDataQuery,
  useGetResumeQuery,
} from "../redux/features/data/dataManagement.api";

const Hero = () => {
  const { data: profileData } = useGetProfileDataQuery(undefined);
  const { data: resume } = useGetResumeQuery(undefined);
  //   const [showResume, setShowResume] = useState(false);
  const [currentBioIndex, setCurrentBioIndex] = useState(0);

  const user = profileData?.data?.[0];
  const bioList = user?.bio || [];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBioIndex((prevIndex) => (prevIndex + 1) % bioList.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [bioList.length]);

  return (
    <div className="text-gray-800 flex flex-col items-center" style={{margin: "5% 0"}}>
      {/* Profile Image */}
      <motion.img
        src={user?.avatarUrl}
        alt="Profile"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-blue-800 shadow-xl mb-6"
      />

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-2xl lg:text-5xl md:text-4xl font-bold text-blue-800 text-center"
      >
        {user?.name}
      </motion.h1>

      {/* Bio (rotating) */}
      <AnimatePresence mode="wait">
        <motion.p
          key={bioList[currentBioIndex]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="text-lg lg:text-2xl md:text-xl text-gray-700 font-bold h-16 align-middle text-center"
        >
          {bioList[currentBioIndex]}
        </motion.p>
      </AnimatePresence>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="max-w-6xl text-justify text-base md:text-lg text-gray-600 mt-4"
      >
        {user?.description}
      </motion.p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4" style={{margin: "15px 0"}}>
        {resume?.data[0]?.resumeUrl && (
          <Button
            type="primary"
            className="bg-blue-800 hover:bg-blue-700 border-none text-white px-6 py-2 rounded-md"
            onClick={() =>
              window.open(
                resume.data[0].resumeUrl,
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            View Resume
          </Button>
        )}

        <Button
          type="default"
          className="border border-blue-800 text-blue-800 px-6 py-2 rounded-md hover:bg-blue-50"
        >
          Contact Me
        </Button>
      </div>
    </div>
  );
};

export default Hero;
