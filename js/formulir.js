/**
 * SMA NUSANTARA UNGGUL — FORMULIR PENDAFTARAN JAVASCRIPT
 * Stand-alone client-side validation and simulation handler.
 */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registration-form');
  const formSection = document.getElementById('form-section');
  const alertTop = document.getElementById('form-alert-top');
  const successCard = document.getElementById('simulation-success');
  const btnReset = document.getElementById('btn-reset-form');

  if (!form) return;

  // Radio button card styling sync
  const radioCards = document.querySelectorAll('.radio-card');
  radioCards.forEach(card => {
    const radio = card.querySelector('input[type="radio"]');
    if (radio) {
      radio.addEventListener('change', () => {
        radioCards.forEach(c => c.classList.remove('active'));
        if (radio.checked) {
          card.classList.add('active');
        }
      });
    }
  });

  // Validation Helper functions
  function setError(fieldId, errorMsg) {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById(`error-${fieldId}`);
    
    if (field) {
      field.classList.add('is-invalid');
    }
    if (errorEl) {
      const msgSpan = errorEl.querySelector('.error-msg-text') || errorEl;
      msgSpan.textContent = errorMsg;
      errorEl.classList.add('visible');
    }
  }

  function clearError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById(`error-${fieldId}`);
    
    if (field) {
      field.classList.remove('is-invalid');
    }
    if (errorEl) {
      errorEl.classList.remove('visible');
    }
  }

  // Clear errors dynamically on input
  const inputsToListen = form.querySelectorAll('input, select, textarea');
  inputsToListen.forEach(input => {
    input.addEventListener('input', () => {
      clearError(input.id);
      if (alertTop) alertTop.classList.remove('visible');
    });
    input.addEventListener('change', () => {
      clearError(input.id);
      if (alertTop) alertTop.classList.remove('visible');
    });
  });

  // Form Submit Handler
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let hasErrors = false;
    let firstErrorElement = null;

    function markError(id, msg) {
      setError(id, msg);
      hasErrors = true;
      if (!firstErrorElement) {
        firstErrorElement = document.getElementById(id);
      }
    }

    // 1. Validasi Nama Lengkap
    const nama = document.getElementById('nama_lengkap');
    if (!nama.value.trim()) {
      markError('nama_lengkap', 'Nama lengkap calon siswa wajib diisi.');
    } else if (nama.value.trim().length < 3) {
      markError('nama_lengkap', 'Nama lengkap minimal 3 karakter.');
    } else {
      clearError('nama_lengkap');
    }

    // 2. Validasi Tempat Lahir
    const tempat = document.getElementById('tempat_lahir');
    if (!tempat.value.trim()) {
      markError('tempat_lahir', 'Tempat lahir wajib diisi.');
    } else {
      clearError('tempat_lahir');
    }

    // 3. Validasi Tanggal Lahir
    const tgl = document.getElementById('tanggal_lahir');
    if (!tgl.value) {
      markError('tanggal_lahir', 'Tanggal lahir wajib diisi.');
    } else {
      clearError('tanggal_lahir');
    }

    // 4. Validasi Jenis Kelamin (Radio)
    const jkChecked = form.querySelector('input[name="jenis_kelamin"]:checked');
    const jkContainer = document.getElementById('group-jenis_kelamin');
    const jkError = document.getElementById('error-jenis_kelamin');
    if (!jkChecked) {
      hasErrors = true;
      if (jkError) {
        jkError.classList.add('visible');
      }
      if (!firstErrorElement && jkContainer) {
        firstErrorElement = jkContainer;
      }
    } else {
      if (jkError) jkError.classList.remove('visible');
    }

    // 5. Validasi Alamat
    const alamat = document.getElementById('alamat');
    if (!alamat.value.trim()) {
      markError('alamat', 'Alamat tempat tinggal wajib diisi.');
    } else {
      clearError('alamat');
    }

    // 6. Validasi Asal Sekolah
    const asal = document.getElementById('asal_sekolah');
    if (!asal.value.trim()) {
      markError('asal_sekolah', 'Asal sekolah (SMP / MTs) wajib diisi.');
    } else {
      clearError('asal_sekolah');
    }

    // 7. Validasi Tahun Kelulusan
    const tahun = document.getElementById('tahun_lulus');
    const tahunRegex = /^\d{4}$/;
    if (!tahun.value.trim()) {
      markError('tahun_lulus', 'Tahun kelulusan wajib diisi.');
    } else if (!tahunRegex.test(tahun.value.trim())) {
      markError('tahun_lulus', 'Tahun kelulusan harus 4 digit angka (contoh: 2026).');
    } else {
      clearError('tahun_lulus');
    }

    // 8. Validasi Nama Orang Tua / Wali
    const wali = document.getElementById('nama_wali');
    if (!wali.value.trim()) {
      markError('nama_wali', 'Nama orang tua atau wali wajib diisi.');
    } else {
      clearError('nama_wali');
    }

    // 9. Validasi Nomor Telepon
    const telp = document.getElementById('nomor_telepon');
    const phoneRegex = /^[0-9+\-\s]{10,15}$/;
    if (!telp.value.trim()) {
      markError('nomor_telepon', 'Nomor telepon / WhatsApp wajib diisi.');
    } else if (!phoneRegex.test(telp.value.trim())) {
      markError('nomor_telepon', 'Format nomor telepon tidak valid (minimal 10 digit angka).');
    } else {
      clearError('nomor_telepon');
    }

    // 10. Validasi Email (Opsional jika diisi)
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() && !emailRegex.test(email.value.trim())) {
      markError('email', 'Format alamat email tidak valid.');
    } else {
      clearError('email');
    }

    // 11. Validasi Pilihan Program
    const program = document.getElementById('program_pilihan');
    if (!program.value) {
      markError('program_pilihan', 'Silakan pilih peminatan pembelajaran.');
    } else {
      clearError('program_pilihan');
    }

    // 12. Validasi Persetujuan Checkbox
    const persetujuan = document.getElementById('persetujuan_simulasi');
    const persetujuanCard = document.getElementById('checkbox-card-persetujuan');
    const persetujuanError = document.getElementById('error-persetujuan_simulasi');
    if (!persetujuan.checked) {
      hasErrors = true;
      if (persetujuanCard) persetujuanCard.classList.add('is-invalid');
      if (persetujuanError) persetujuanError.classList.add('visible');
      if (!firstErrorElement && persetujuanCard) firstErrorElement = persetujuanCard;
    } else {
      if (persetujuanCard) persetujuanCard.classList.remove('is-invalid');
      if (persetujuanError) persetujuanError.classList.remove('visible');
    }

    // Jika terjadi error, tampilkan alert atas & scroll ke input pertama yang bermasalah
    if (hasErrors) {
      if (alertTop) alertTop.classList.add('visible');
      if (firstErrorElement) {
        firstErrorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        if (typeof firstErrorElement.focus === 'function') {
          firstErrorElement.focus();
        }
      }
      return;
    }

    // Jika valid, sembunyikan alert
    if (alertTop) alertTop.classList.remove('visible');

    // Kumpulkan data ke receipt preview
    const dataSubmitted = {
      nama: nama.value.trim(),
      tempat: tempat.value.trim(),
      tanggal: tgl.value,
      jk: jkChecked ? jkChecked.value : '-',
      alamat: alamat.value.trim(),
      asal: asal.value.trim(),
      tahun: tahun.value.trim(),
      wali: wali.value.trim(),
      telp: telp.value.trim(),
      email: email.value.trim() || '— (Tidak diisi)',
      program: program.options[program.selectedIndex].text
    };

    // Tampilkan data di card konfirmasi
    document.getElementById('preview-nama').textContent = dataSubmitted.nama;
    document.getElementById('preview-ttl').textContent = `${dataSubmitted.tempat}, ${dataSubmitted.tanggal}`;
    document.getElementById('preview-jk').textContent = dataSubmitted.jk;
    document.getElementById('preview-sekolah').textContent = `${dataSubmitted.asal} (Lulus ${dataSubmitted.tahun})`;
    document.getElementById('preview-alamat').textContent = dataSubmitted.alamat;
    document.getElementById('preview-wali').textContent = dataSubmitted.wali;
    document.getElementById('preview-telp').textContent = dataSubmitted.telp;
    document.getElementById('preview-email').textContent = dataSubmitted.email;
    document.getElementById('preview-program').textContent = dataSubmitted.program;

    // Transisi: sembunyikan form, tampilkan receipt sukses
    formSection.style.display = 'none';
    successCard.classList.add('visible');
    successCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // Tombol Isi Formulir Lagi
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      form.reset();
      radioCards.forEach(c => c.classList.remove('active'));
      const allErrors = form.querySelectorAll('.error-text');
      allErrors.forEach(err => err.classList.remove('visible'));
      const allInvalids = form.querySelectorAll('.is-invalid');
      allInvalids.forEach(inv => inv.classList.remove('is-invalid'));
      if (alertTop) alertTop.classList.remove('visible');

      successCard.classList.remove('visible');
      formSection.style.display = 'block';
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
});

