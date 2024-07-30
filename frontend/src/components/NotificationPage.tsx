import React from 'react';
import { IconHeart, IconMessageCircle, IconUser, IconTag, IconCalendar, IconStar } from '@tabler/icons-react';

const NotificationPage: React.FC = () => {
  return (
    <div className="flex flex-col bg-white justify-center items-center mx-auto p-4">
      <h1 className="bg-white shadow-xl rounded-lg text-2xl font-bold mb-4 ml- text-center md:w-1/2">Notifications</h1>

      {/* Notification List */}
      <div className="bg-gray shadow-xl rounded-lg p-4 max-w-2xl mx-auto w-full md:w-1/2">
        {/* Like Notification */}
        <div className="notification-item flex items-center border-b border-gray-200 py-2">
          <div className="icon bg-blue-100 p-2 rounded-full mr-4">
            <IconHeart className="w-6 h-6 text-blue-500" />
          </div>
          <div className="notification-content flex-1">
            <p className="text-gray-800 font-semibold">Jane Doe</p>
            <p className="text-gray-600">liked your post.</p>
            <p className="text-gray-400 text-sm">2 hours ago</p>
          </div>
        </div>

        {/* Comment Notification */}
        <div className="notification-item flex items-center border-b border-gray-200 py-2">
          <div className="icon bg-green-100 p-2 rounded-full mr-4">
            <IconMessageCircle className="w-6 h-6 text-green-500" />
          </div>
          <div className="notification-content flex-1">
            <p className="text-gray-800 font-semibold">John Smith</p>
            <p className="text-gray-600">commented on your post.</p>
            <p className="text-gray-400 text-sm">1 day ago</p>
          </div>
        </div>

        {/* Follow Notification */}
        <div className="notification-item flex items-center border-b border-gray-200 py-2">
          <div className="icon bg-yellow-100 p-2 rounded-full mr-4">
            <IconUser className="w-6 h-6 text-yellow-500" />
          </div>
          <div className="notification-content flex-1">
            <p className="text-gray-800 font-semibold">Emily Johnson</p>
            <p className="text-gray-600">started following you.</p>
            <p className="text-gray-400 text-sm">3 days ago</p>
          </div>
        </div>

        {/* Tag Notification */}
        <div className="notification-item flex items-center border-b border-gray-200 py-2">
          <div className="icon bg-purple-100 p-2 rounded-full mr-4">
            <IconTag className="w-6 h-6 text-purple-500" />
          </div>
          <div className="notification-content flex-1">
            <p className="text-gray-800 font-semibold">Your Friend</p>
            <p className="text-gray-600">tagged you in a photo.</p>
            <p className="text-gray-400 text-sm">5 days ago</p>
          </div>
        </div>

        {/* New Message Notification */}
        <div className="notification-item flex items-center border-b border-gray-200 py-2">
          <div className="icon bg-teal-100 p-2 rounded-full mr-4">
            <IconMessageCircle className="w-6 h-6 text-teal-500" />
          </div>
          <div className="notification-content flex-1">
            <p className="text-gray-800 font-semibold">Sarah Lee</p>
            <p className="text-gray-600">sent you a new message.</p>
            <p className="text-gray-400 text-sm">6 hours ago</p>
          </div>
        </div>

        {/* Event Reminder Notification */}
        <div className="notification-item flex items-center border-b border-gray-200 py-2">
          <div className="icon bg-red-100 p-2 rounded-full mr-4">
            <IconCalendar className="w-6 h-6 text-red-500" />
          </div>
          <div className="notification-content flex-1">
            <p className="text-gray-800 font-semibold">University Event</p>
            <p className="text-gray-600">Reminder for the upcoming seminar.</p>
            <p className="text-gray-400 text-sm">1 day ago</p>
          </div>
        </div>

        {/* Friend Request Notification */}
        <div className="notification-item flex items-center border-b border-gray-200 py-2">
          <div className="icon bg-orange-100 p-2 rounded-full mr-4">
            <IconUser className="w-6 h-6 text-orange-500" />
          </div>
          <div className="notification-content flex-1">
            <p className="text-gray-800 font-semibold">Mike Brown</p>
            <p className="text-gray-600">sent you a friend request.</p>
            <p className="text-gray-400 text-sm">2 days ago</p>
          </div>
        </div>

        {/* Achievement Unlocked Notification */}
        <div className="notification-item flex items-center border-b border-gray-200 py-2">
          <div className="icon bg-yellow-100 p-2 rounded-full mr-4">
            <IconStar className="w-6 h-6 text-yellow-500" />
          </div>
          <div className="notification-content flex-1">
            <p className="text-gray-800 font-semibold">Congratulations!</p>
            <p className="text-gray-600">You've unlocked a new achievement.</p>
            <p className="text-gray-400 text-sm">4 days ago</p>
          </div>
        </div>

        {/* Event Invitation Notification */}
        <div className="notification-item flex items-center border-b border-gray-200 py-2">
          <div className="icon bg-teal-100 p-2 rounded-full mr-4">
            <IconCalendar className="w-6 h-6 text-teal-500" />
          </div>
          <div className="notification-content flex-1">
            <p className="text-gray-800 font-semibold">Class Study Group</p>
            <p className="text-gray-600">invited you to join a study group.</p>
            <p className="text-gray-400 text-sm">1 week ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
