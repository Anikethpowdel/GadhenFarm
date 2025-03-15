import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";
import { apiRequest } from "@/lib/queryClient";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(7, { message: "Please enter a valid phone number" }),
  farmSize: z.string().optional(),
  package: z.string().optional(),
  message: z.string().optional(),
  consent: z.boolean().refine(val => val === true, { message: "You must agree to the terms" })
});

type FormValues = z.infer<typeof formSchema>;

const packages = [
  {
    name: "Basic",
    description: "For small greenhouses",
    price: "$999",
    features: [
      "Up to 100m² coverage",
      "4 sensor nodes",
      "2 control units"
    ],
    color: "#083932",
    bgColor: "#ffffff",
    textColor: "#083932",
    highlight: false
  },
  {
    name: "Standard",
    description: "Most popular option",
    price: "$1,999",
    features: [
      "Up to 500m² coverage",
      "8 sensor nodes",
      "4 control units",
      "AI recommendations"
    ],
    color: "#B1D931",
    bgColor: "#083932",
    textColor: "#ffffff",
    highlight: true
  },
  {
    name: "Premium",
    description: "For commercial operations",
    price: "$3,499",
    features: [
      "Up to 1,000m² coverage",
      "16 sensor nodes",
      "8 control units",
      "Advanced analytics",
      "Priority support"
    ],
    color: "#5EB1BF",
    bgColor: "#ffffff",
    textColor: "#083932",
    highlight: false
  }
];

export function BookingSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      farmSize: "",
      package: "",
      message: "",
      consent: false
    }
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/booking", data);
      setIsSuccess(true);
      toast({
        title: "Request Submitted",
        description: "We'll be in touch with you shortly.",
        variant: "default"
      });
      form.reset();
      setTimeout(() => setIsSuccess(false), 2000);
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInLeft}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-inter mb-6">
              Get Started with GreenSense
            </h2>
            <p className="text-gray-600 mb-8">
              Ready to transform your greenhouse with smart automation? Our system is adaptable to different sizes and types of operations.
            </p>

            <div className="bg-lightBlue rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-primary mb-4">What's Included:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Complete hardware kit with sensors and controllers
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Mobile and web applications with unlimited access
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Installation and setup assistance
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    1-year technical support and warranty
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Training for you and your team
                  </span>
                </li>
              </ul>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
              variants={staggerContainer}
            >
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  style={{
                    backgroundColor: pkg.bgColor,
                    color: pkg.textColor,
                    borderColor: pkg.color
                  }}
                  className={`
                    ${pkg.highlight ? "transform scale-105" : ""}
                    rounded-lg shadow-md p-6 border-t-4 text-center relative overflow-hidden group
                  `}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="absolute top-0 right-0 w-16 h-16 -mt-6 -mr-6 rounded-full opacity-20"
                    style={{ backgroundColor: pkg.color }}
                  ></div>

                  <h3
                    className="font-bold text-lg mb-2"
                    style={{ color: pkg.highlight ? "#B1D931" : pkg.color }}
                  >
                    {pkg.name}
                  </h3>
                  <p className="text-sm mb-4 opacity-90">{pkg.description}</p>
                  <p
                    className="text-3xl font-bold mb-4"
                    style={{ color: pkg.highlight ? "#B1D931" : pkg.color }}
                  >
                    {pkg.price}
                  </p>
                  <ul className="text-sm mb-6 space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span
                          className="w-1.5 h-1.5 rounded-full mr-2"
                          style={{ backgroundColor: pkg.highlight ? "#B1D931" : pkg.color }}
                        ></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </motion.div>
              ))}
            </motion.div>

            <p className="text-gray-600 text-sm mb-4">
              * Custom solutions available for larger operations. Contact us for details.
            </p>
            <p className="text-gray-600 text-sm">
              * Government subsidies may be available for qualifying farms.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-8 border border-[#B1D931]/20 relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInRight}
          >
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full -mt-20 -mr-20 bg-[#B1D931]/5"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 rounded-full -mb-10 -ml-10 bg-[#083932]/5"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-[#083932] mb-2">Request Information</h3>
              <div className="w-16 h-1 bg-[#B1D931] mb-6"></div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Enter your first name"
                              className="bg-gray-50 border border-gray-300 rounded-md p-2 text-black"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Enter your last name"
                              className="bg-gray-50 border border-gray-300 rounded-md p-2 text-black"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            {...field}
                            placeholder="Enter your email address"
                            className="bg-gray-50 border border-gray-300 rounded-md p-2 text-black"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            {...field}
                            placeholder="Enter your phone number"
                            className="bg-gray-50 border border-gray-300 rounded-md p-2 text-black"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="farmSize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Greenhouse Size</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-gray-50 border border-gray-300 rounded-md p-2">
                              <SelectValue 
                                placeholder="Select a size" 
                                className="text-black placeholder:text-gray-500" 
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="small">Small (under 100m²)</SelectItem>
                            <SelectItem value="medium">Medium (100-500m²)</SelectItem>
                            <SelectItem value="large">Large (500-1000m²)</SelectItem>
                            <SelectItem value="commercial">Commercial (over 1000m²)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="package"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Interested Package</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-gray-50 border border-gray-300 rounded-md p-2">
                              <SelectValue 
                                placeholder="Select a package" 
                                className="text-black placeholder:text-gray-500" 
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="basic">Basic</SelectItem>
                            <SelectItem value="standard">Standard</SelectItem>
                            <SelectItem value="premium">Premium</SelectItem>
                            <SelectItem value="custom">Custom Solution</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Information</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your specific needs or any questions you have"
                            className="resize-none bg-gray-50 border border-gray-300 rounded-md p-2 text-black placeholder:text-gray-500"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="consent"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-black">
                            I consent to GreenSense contacting me regarding my inquiry. I understand my data will be processed according to the{" "}
                            <a href="#" className="text-primary hover:text-[#B1D931] transition-colors">
                              Privacy Policy
                            </a>.
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#B1D931] hover:bg-[#9fc128] text-[#083932] font-bold py-3 px-6 rounded-lg shadow-md transition-all"
                  >
                    {isSubmitting
                      ? "Submitting..."
                      : isSuccess
                      ? "Success!"
                      : "Submit Request"}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}