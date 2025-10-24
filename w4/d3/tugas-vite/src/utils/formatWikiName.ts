export function formatWikiName(name: string): string {
  return name
    .replace(/ /g, "_") // ubah spasi menjadi underscore
    .replace(/\[/g, "") // hapus tanda [
    .replace(/\]/g, "") // hapus tanda ]
    .replace(/'/g, "%27") // ubah apostrof jadi kode wiki
    .replace(/&/g, "%26") // ubah &
    .replace(/:/g, "-") // ubah :
}
