import React, { useState } from "react";

function App() {
  const [pegawai, setPegawai] = useState([
    { id: 1, nama: "Budi", jabatan: "Manager" },
    { id: 2, nama: "Siti", jabatan: "Staff" }
  ]);

  const [form, setForm] = useState({ id: null, nama: "", jabatan: "" });
  const [mode, setMode] = useState("list"); // list, tambah, edit

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const tambahPegawai = () => {
    const idBaru = pegawai.length + 1;
    setPegawai([...pegawai, { id: idBaru, ...form }]);
    setForm({ id: null, nama: "", jabatan: "" });
    setMode("list");
  };

  const editPegawai = (id) => {
    const peg = pegawai.find((p) => p.id === id);
    setForm(peg);
    setMode("edit");
  };

  const updatePegawai = () => {
    setPegawai(
      pegawai.map((p) => (p.id === form.id ? form : p))
    );
    setForm({ id: null, nama: "", jabatan: "" });
    setMode("list");
  };

  const hapusPegawai = (id) => {
    setPegawai(pegawai.filter((p) => p.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>CRUD Pegawai (1 File Saja)</h1>

      {/* ==== MODE LIST ==== */}
      {mode === "list" && (
        <>
          <button onClick={() => setMode("tambah")}>Tambah Pegawai</button>

          <table border="1" cellPadding="10" style={{ marginTop: "20px" }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nama</th>
                <th>Jabatan</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {pegawai.map((p) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.nama}</td>
                  <td>{p.jabatan}</td>
                  <td>
                    <button onClick={() => editPegawai(p.id)}>Edit</button>
                    <button onClick={() => hapusPegawai(p.id)}>Hapus</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {/* ==== MODE TAMBAH ==== */}
      {mode === "tambah" && (
        <>
          <h2>Tambah Pegawai</h2>
          <input
            name="nama"
            placeholder="Nama"
            value={form.nama}
            onChange={handleChange}
          />
          <input
            name="jabatan"
            placeholder="Jabatan"
            value={form.jabatan}
            onChange={handleChange}
          />
          <br /><br />
          <button onClick={tambahPegawai}>Simpan</button>
          <button onClick={() => setMode("list")}>Batal</button>
        </>
      )}

      {/* ==== MODE EDIT ==== */}
      {mode === "edit" && (
        <>
          <h2>Edit Pegawai</h2>
          <input
            name="nama"
            placeholder="Nama"
            value={form.nama}
            onChange={handleChange}
          />
          <input
            name="jabatan"
            placeholder="Jabatan"
            value={form.jabatan}
            onChange={handleChange}
          />
          <br /><br />
          <button onClick={updatePegawai}>Update</button>
          <button onClick={() => setMode("list")}>Batal</button>
        </>
      )}
    </div>
  );
}

export default App;
