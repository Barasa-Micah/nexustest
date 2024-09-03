import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaCamera } from 'react-icons/fa';
import CustomInput from '../components/CustomInput'; 
import CustomTextArea from '../components/CustomTextArea'; 
import CustomButton from '../components/CustomButton';
import SettingsSidebar from '../components/SettingsSidebar';

const ProfileSettings = () => {
  const { user, updateUser } = useContext(AppContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateUser({ [name]: value });
  };

  const getInitials = (name) => {
    if (!name) return '';
    const initials = name.split(' ').map((word) => word[0]).join('');
    return initials.toUpperCase();
  };

  return (
    <div className="flex">
      <SettingsSidebar />  
      <div className="flex-1 p-8 bg-white shadow-md">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-24 h-24 flex items-center justify-center bg-gray-300 text-white text-3xl font-semibold rounded-full">
              {getInitials(user.profileName)}
            </div>
            <div className="flex flex-col">
              <span className="text-gray-700 text-sm mb-2">Profile picture</span>
              <div className="flex space-x-2">
                <CustomButton icon={<FaCamera />} className="bg-blue-500 text-white text-xs py-1 px-2 rounded-md">
                  Change picture
                </CustomButton>
                <CustomButton variant="secondary" className="bg-red-500 text-white text-xs py-1 px-2 rounded-md">
                  Delete picture
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm">Profile name</label>
            <CustomInput
              name="profileName"
              value={user.profileName}
              onChange={handleInputChange}
              className="w-full mt-1 border-gray-300 text-sm"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm">Username</label>
            <CustomInput
              name="username"
              value={user.username}
              onChange={handleInputChange}
              className="w-full mt-1 border-gray-300 text-sm"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm">Available change in</label>
            <CustomInput
              name="availableChange"
              value={user.availableChange}
              readOnly
              className="w-full mt-1 bg-gray-100 border-gray-300 text-sm"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm">Status recently</label>
            <CustomInput
              name="status"
              value={user.status}
              onChange={handleInputChange}
              className="w-full mt-1 border-gray-300 text-sm"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm">About me</label>
            <CustomTextArea
              name="aboutMe"
              value={user.aboutMe}
              onChange={handleInputChange}
              className="w-full mt-1 border-gray-300 text-sm"
            />
          </div>
          <div className="flex justify-end">
            <CustomButton className="bg-gray-300 text-gray-600 text-sm py-2 px-4 rounded-md">
              Save changes
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
