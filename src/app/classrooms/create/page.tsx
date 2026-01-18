"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createClassSchema,
  CreateClassFormData,
} from "@/schemas/create-class.schema";
import {
  Card,
  CardBody,
  Input,
  Textarea,
  Button,
  Select,
  SelectItem,
} from "@heroui/react";
import { toast } from "sonner";

export default function CreateClassPage() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CreateClassFormData>({
    resolver: zodResolver(createClassSchema),
    defaultValues: {
      visibility: "PUBLIC",
    },
  });

  const onSubmit = async (data: CreateClassFormData) => {
    try {
      console.log("submit", data);
      toast.success("Class created successfully 🎉");
      reset();
    } catch (err: any) {
      toast.error(err.message || "Failed to create class");
    }
  };

  return (
    <div className="flex justify-center px-4 py-12">
      <Card className="w-full max-w-lg">
        <CardBody className="flex flex-col gap-6">
          <h1 className="text-2xl font-bold">Create class</h1>

          {/* Class name */}
          <Input
            isRequired
            label="Class name"
            placeholder="e.g. Math 101"
            {...register("name")}
            isInvalid={!!errors.name}
            errorMessage={errors.name?.message}
          />

          {/* Description */}
          <Textarea
            isRequired
            label="Description"
            placeholder="Describe what this class is about"
            {...register("description")}
            isInvalid={!!errors.description}
            errorMessage={errors.description?.message}
          />

          {/* Visibility */}
          <Controller
            name="visibility"
            control={control}
            render={({ field }) => (
              <Select
                label="Visibility"
                selectedKeys={field.value ? [field.value] : []}
                onSelectionChange={(keys) => {
                  const value = Array.from(keys)[0] as "PUBLIC" | "PRIVATE";
                  field.onChange(value);
                }}
                isRequired
                isInvalid={!!errors.visibility}
                errorMessage={errors.visibility?.message}
              >
                <SelectItem key="PUBLIC">
                  Public – anyone can join
                </SelectItem>
                <SelectItem key="PRIVATE">
                  Private – invite only
                </SelectItem>
              </Select>
            )}
          />

          {/* Actions */}
          <div className="flex justify-end gap-3">
            <Button variant="light" type="button">
              Cancel
            </Button>
            <Button
              color="primary"
              type="submit"
              isLoading={isSubmitting}
              onClick={handleSubmit(onSubmit)}
            >
              Create
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
