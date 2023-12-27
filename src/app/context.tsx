"use client";
import { Notification } from "./components/ContactForm";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface Notification {
  message: string;
  success: boolean;
}

export interface NotificationContextProps {
  notification: Notification;
  setNotification: Dispatch<SetStateAction<Notification>>;
}

export const initialNotification: Notification = {
  message: "",
  success: false,
};

const defaultNotificationContext: NotificationContextProps = {
  notification: initialNotification,
  setNotification: () => {},
};

const NotificationContext = createContext<NotificationContextProps>(
  defaultNotificationContext
);

const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notification, setNotification] =
    useState<Notification>(initialNotification);

  return (
    <NotificationContext.Provider value={{ notification, setNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

export { NotificationProvider, NotificationContext };
