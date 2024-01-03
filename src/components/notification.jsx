import useCart from "@/utils/store/cartStore";
import NotificationIcon from "@/assets/icons/notification-icon";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export function Notification() {
  const { notification, setNotification } = useCart();

  const clickNotificationHandler = (id) => {
    const newNotification = notification.map((notif) => {
      if (notif.id === id) {
        return {
          ...notif,
          isRead: true,
        };
      }
      return notif;
    });
    setNotification(newNotification);
    localStorage.setItem("notification", JSON.stringify(newNotification));
  };

  return (
    <Popover>
      <PopoverTrigger>
        <NotificationIcon />
      </PopoverTrigger>
      <PopoverContent className="w-80 max-h-96 overflow-scroll p-0 rounded-none">
        <div className="flex flex-col pt-14">
          <div className="p-3 shadow-md fixed top-0 bg-white w-full">
            <p className="font-medium">Notifikasi</p>
          </div>
          {notification.length > 0 ? (
            notification.map(({ title, paragraph, isRead, id }, index) => (
              <NotificationBadge
                key={index}
                title={title}
                paragraph={paragraph}
                read={isRead}
                onNotificationClick={() => clickNotificationHandler(id)}
              />
            ))
          ) : (
            <h1 className="mx-auto py-5">Notifikasi kosong</h1>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}

function NotificationBadge({ title, paragraph, read, onNotificationClick }) {
  return (
    <div
      onClick={!read ? onNotificationClick : undefined}
      className={`p-3 border-b-gray-400 border-[1px] ${
        !read ? "bg-[#FFCCEC] cursor-pointer" : "bg-white"
      } `}
    >
      <h6 className="font-medium text-sm">{title}</h6>
      <p className="text-sm">{paragraph}</p>
    </div>
  );
}
