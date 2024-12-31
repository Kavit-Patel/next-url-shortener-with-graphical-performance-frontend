"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { api, errroMessage } from "./axios";
import { IShortUrl, IUser } from "@/types";
import toast from "react-hot-toast";

export const useUserLogin = () => {
  return useQuery<IUser, AxiosError>({
    queryKey: ["user"],
    queryFn: async () => {
      try {
        const data = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/user`,
          {
            withCredentials: true,
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        return data.data;
      } catch (error) {
        console.log("Error :", error);
      }
    },
    refetchOnWindowFocus: false,
  });
};

export const useShortUrl = () => {
  return useMutation<
    IShortUrl,
    AxiosError,
    { longUrl: string; userId: string }
  >({
    mutationFn: async ({ longUrl }) => {
      try {
        const { data } = await api.post("/shorten", { longUrl });
        return data;
      } catch (error) {
        console.log("Eror :", error);
        toast.error(errroMessage(error));
      }
    },
  });
};

export const useUserLogOut = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      try {
        const { data } = await api.get("auth/logout");
        queryClient.removeQueries({ queryKey: ["user"] });
        return data;
      } catch (error) {
        toast.error(errroMessage(error));
      }
    },
  });
};
