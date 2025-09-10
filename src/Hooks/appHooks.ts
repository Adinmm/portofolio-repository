import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AppModels, type AppModelsType } from "../Models/AppModels";
import { axiosInstance } from "../lib/axiosInstance";
import { useMutation } from "@tanstack/react-query";
import { useGlobalContext } from "../Context/Context";

const SendMessage = async (data: AppModelsType) => {
  const response = await axiosInstance.post("/api/send_message", data);
  return response.data;
};
export const useSendMessage = () => {
  const { stateHandle } = useGlobalContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AppModelsType>({
    resolver: zodResolver(AppModels),
  });

  const mutation = useMutation({
    mutationKey: ["send_message"],
    mutationFn: (data: AppModelsType) => SendMessage(data),
    onSuccess: () => {
      stateHandle("toggle", true);
      reset();
    },
    onError: (err: any) => {
      throw new Error(err);
    },
  });

  return {
    register,
    handleSubmit,
    errors,
    isLoading: mutation.isPending,
    onSubmit: mutation.mutate,
  };
};
