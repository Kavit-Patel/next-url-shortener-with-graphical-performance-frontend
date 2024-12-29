"use client";
import Home from "@/app/page";
import MyUrlsUi from "@/components/MyUrls-Ui";
import { IUser } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";

const MyUrlsFeature = () => {
  const queryClient = useQueryClient();
  const user: IUser | undefined = queryClient.getQueryData(["user"]);
  return user ? <MyUrlsUi user={user} /> : <Home />;
};

export default MyUrlsFeature;
