import { toast } from "react-hot-toast";

export function useToast() {
  const show = ({ title, description }) => {
    toast.success(`${title}\n${description}`);
  };

  const error = ({ title, description }) => {
    toast.error(`${title}\n${description}`);
  };

  return { toast: show, toastError: error };
}
