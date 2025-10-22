import { useState } from "react";
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function ProfileCard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    if (!name || !email) return alert("Isi semua data dulu!");
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <Card className="w-[350px] mx-auto mt-10 shadow-md">
      <CardHeader>
        <CardTitle>Edit Profil</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Input placeholder="Nama Lengkap" value={name} onChange={(e) => setName(e.target.value)} />
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleSave}>Simpan</Button>
      </CardFooter>

      {saved && (
        <Alert className="mt-3 bg-emerald-100 border-emerald-400 text-emerald-900">
          <AlertTitle>Berhasil!</AlertTitle>
          <AlertDescription>Data profil telah disimpan.</AlertDescription>
        </Alert>
      )}
    </Card>
  );
}
