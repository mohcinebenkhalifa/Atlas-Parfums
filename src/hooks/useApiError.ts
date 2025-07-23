import { toast } from '@/hooks/use-toast';

export function useApiError() {
  return (error: unknown, defaultMessage = "Une erreur est survenue") => {
    let message = defaultMessage;
    if (error instanceof Error) message = error.message;
    toast({
      title: "Erreur",
      description: message,
      variant: "destructive",
    });
  };
}