"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
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

      <DialogContent className="max-w-4xl p-0">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle>Agenda una reunión</DialogTitle>
        </DialogHeader>

        {/* IFRAME */}
        <div className="p-6">
          <iframe
            src="https://outlook.office.com/book/agendacyberhub@cyberhub.cl/"
            className="w-full h-[800px] rounded-lg border border-gray-200"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
