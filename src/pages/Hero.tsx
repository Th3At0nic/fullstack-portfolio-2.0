import { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import { useGetResumeQuery } from "../redux/features/data/dataManagement.api";
import { Eye, Send, Download } from "lucide-react";
import { getDownloadLink } from "../utils/getDownloadLink";
import { getDrivePreviewUrl } from "../utils/getDrivePreviewLink";
import { TProfileData } from "../types/data.type";

type HeroProps = {
  profileData: TProfileData[];
};

const Hero = ({ profileData }: HeroProps) => {
  const { data: resume } = useGetResumeQuery(undefined);

  const [currentBioIndex, setCurrentBioIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const user = profileData?.[0];
  const bioList = user?.bio || [];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBioIndex((prevIndex) => (prevIndex + 1) % bioList.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [bioList.length]);

  return (
    <div
      className="text-gray-800 flex flex-col items-center"
      style={{ margin: "5% 0" }}
    >
      <motion.img
        src={user?.avatarUrl}
        alt="Profile"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-blue-800 shadow-xl mb-6"
      />

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-2xl lg:text-5xl md:text-4xl font-bold text-blue-800 text-center"
      >
        {user?.name}
      </motion.h1>

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

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="max-w-6xl text-justify text-base md:text-lg text-gray-600 mt-4"
      >
        {user?.description}
      </motion.p>

      <div
        className="flex flex-col sm:flex-row gap-4"
        style={{ margin: "15px 0" }}
      >
        {resume?.data[0]?.resumeUrl && (
          <>
            <Button
              type="primary"
              className="bg-blue-800 hover:bg-blue-700 border-none text-white px-6 py-2 rounded-md"
              onClick={() => {
                setIsModalOpen(true);
                getDrivePreviewUrl(resume?.data[0]?.resumeUrl);
              }}
            >
              <Eye size={16} /> View Resume
            </Button>

            <Button
              type="default"
              className="border border-blue-800 text-blue-800 px-6 py-2 rounded-md hover:bg-blue-50"
              onClick={() => {
                const url = getDownloadLink(resume?.data[0]?.resumeUrl);
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", "resume.pdf");
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <Download size={16} />
              Download Resume
            </Button>
          </>
        )}

        <Button
          type="default"
          className="border border-blue-800 text-blue-800 px-6 py-2 rounded-md hover:bg-blue-50"
          onClick={() => {
            const section = document.getElementById("contact");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <Send size={16} /> Contact Me
        </Button>
      </div>

      {/* Resume Modal */}
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        width={1000}
        centered
        styles={{
          body: {
            padding: 0,
            height: "80vh",
          },
        }}
      >
        {resume?.data[0]?.resumeUrl ? (
          <iframe
            src={getDrivePreviewUrl(resume?.data[0]?.resumeUrl)}
            width="100%"
            height="100%"
            style={{ border: "none", padding: "2%" }}
            className="rounded-md"
          />
        ) : (
          <p className="text-red-500">Resume preview is not available.</p>
        )}
      </Modal>
    </div>
  );
};

export default Hero;
