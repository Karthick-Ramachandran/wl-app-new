import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input, Label, Button } from '../ui';

interface FormData {
  name: string;
  email: string;
  twitterProfile: string;
  contactNumber: string;
  universityName: string;
  crackedBuilderName: string;
}

interface WaitlistFormProps {
  onSubmit: (data: FormData) => Promise<void>;
  isSubmitting: boolean;
}

const WaitlistForm: React.FC<WaitlistFormProps> = ({ onSubmit, isSubmitting }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    twitterProfile: '',
    contactNumber: '',
    universityName: '',
    crackedBuilderName: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isFormValid = () => {
    const requiredFields = ['name', 'email', 'contactNumber', 'crackedBuilderName'];
    return requiredFields.every(field => formData[field as keyof FormData]?.trim() !== '');
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    await onSubmit(formData);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20, transition: { duration: 0.4 } },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      className="w-full max-w-lg sm:max-w-2xl mt-4 sm:mt-8 lg:mt-4 lg:max-w-5xl mx-auto px-3 sm:px-0"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{
        animate: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      <motion.div className="bg-[#FAF3E9] rounded-lg p-4 sm:p-8 mb-6 form-card-mobile">
        <motion.form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 form-grid-mobile"
        >
          {/* First Row */}
          <motion.div variants={fadeInUp} className="col-span-1 sm:col-span-1">
            <Label htmlFor="name" required>
              Hi, what&apos;s your name?
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="hidden lg:block col-span-1">
            <Label htmlFor="universityName">
              Which university do you go to?
            </Label>
            <Input
              id="universityName"
              name="universityName"
              type="text"
              value={formData.universityName}
              onChange={handleChange}
              placeholder="University Name"
            />
          </motion.div>

          {/* Second Row */}
          <motion.div variants={fadeInUp} className="col-span-1 sm:col-span-1">
            <Label htmlFor="email" required>
              Share your email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="hidden lg:block col-span-1">
            <Label htmlFor="crackedBuilderName" required>
              Recommend one cracked builder you know?
            </Label>
            <Input
              id="crackedBuilderName"
              name="crackedBuilderName"
              type="text"
              value={formData.crackedBuilderName}
              onChange={handleChange}
              placeholder="Their Email or Social Profile"
            />
          </motion.div>

          {/* Third Row */}
          <motion.div variants={fadeInUp} className="col-span-1 sm:col-span-1">
            <Label htmlFor="contactNumber" required>
              Contact Number?
            </Label>
            <Input
              id="contactNumber"
              name="contactNumber"
              type="tel"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Phone number"
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="lg:hidden col-span-1">
            <Label htmlFor="crackedBuilderName" required>
              Recommend one cracked builder you know?
            </Label>
            <Input
              id="crackedBuilderName"
              name="crackedBuilderName"
              type="text"
              value={formData.crackedBuilderName}
              onChange={handleChange}
              placeholder="Their Email or Social Profile"
            />
          </motion.div>

          {/* Fourth Row */}
          <motion.div variants={fadeInUp} className="col-span-1 sm:col-span-1">
            <Label htmlFor="twitterProfile">
              What&apos;s your Twitter Profile?
            </Label>
            <Input
              id="twitterProfile"
              name="twitterProfile"
              type="url"
              value={formData.twitterProfile}
              onChange={handleChange}
              placeholder="Profile URL"
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="col-span-1 lg:hidden">
            <Label htmlFor="universityName">
              Which university do you go to?
            </Label>
            <Input
              id="universityName"
              name="universityName"
              type="text"
              value={formData.universityName}
              onChange={handleChange}
              placeholder="University Name"
            />
          </motion.div>
        </motion.form>
      </motion.div>
      
      {/* Submit Button - Outside Card */}
      <motion.div variants={fadeInUp} className="flex justify-center button-container-mobile">
        <Button
          type="submit"
          disabled={isSubmitting || !isFormValid()}
          onClick={handleSubmit}
          variant={isSubmitting || !isFormValid() ? 'secondary' : 'primary'}
          isLoading={isSubmitting}
        >
          SUBMIT
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default WaitlistForm; 