
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Veuillez entrer une adresse email valide'),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Le sujet doit contenir au moins 5 caractères'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log('Contact form submitted:', values);
    
    toast({
      title: "Message envoyé !",
      description: "Nous avons bien reçu votre message. Nous vous répondrons dans les plus brefs délais.",
    });
    
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-moroccan-burgundy font-medium">
                  Nom complet *
                </FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Votre nom complet" 
                    {...field}
                    className="border-gray-300 focus:border-moroccan-gold"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-moroccan-burgundy font-medium">
                  Email *
                </FormLabel>
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder="votre@email.com" 
                    {...field}
                    className="border-gray-300 focus:border-moroccan-gold"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-moroccan-burgundy font-medium">
                Téléphone
              </FormLabel>
              <FormControl>
                <Input 
                  type="tel" 
                  placeholder="+212 6XX XXX XXX" 
                  {...field}
                  className="border-gray-300 focus:border-moroccan-gold"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-moroccan-burgundy font-medium">
                Sujet *
              </FormLabel>
              <FormControl>
                <Input 
                  placeholder="Objet de votre message" 
                  {...field}
                  className="border-gray-300 focus:border-moroccan-gold"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-moroccan-burgundy font-medium">
                Message *
              </FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Décrivez votre demande en détail..."
                  className="min-h-[120px] border-gray-300 focus:border-moroccan-gold"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full bg-moroccan-gold hover:bg-moroccan-gold/90 text-white py-3 text-lg font-medium"
        >
          Envoyer le message
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
