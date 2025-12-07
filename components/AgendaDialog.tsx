"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

type Props = {
  trigger: React.ReactNode;
};

export default function AgendaDialog({ trigger }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild className="cursor-pointer">
        {trigger}
      </DialogTrigger>

      <DialogContent
        className="
          p-0 
          w-full 
          max-w-[95vw] 
          md:max-w-3xl 
          lg:max-w-4xl 
          max-h-[92vh] 
          overflow-hidden
        "
      >
        <DialogTitle hidden className="sr-only">
          Agendar Reunión
        </DialogTitle>
        <div className="w-full h-full overflow-auto p-4">
          <iframe
            src="https://outlook.office.com/book/agendacyberhub@cyberhub.cl/"
            className="
              w-full 
              h-[75vh] 
              rounded-lg 
              border border-gray-200
            "
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
