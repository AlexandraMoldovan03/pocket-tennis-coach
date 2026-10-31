# Jurnal de dezvoltare — PocketTennisCoach

Jurnalul înregistrează cronologic ce s-a făcut, ce comenzi s-au rulat, ce s-a verificat efectiv și ce a rămas nerezolvat. Rezultatele raportate aici sunt doar cele observate; nicio afirmație nu anticipează experimente viitoare.

---

## 2026-10-31 — Faza 1, Checkpoint 1: Inspecția mediului

**Scop:** identificarea mediului de dezvoltare înainte de orice modificare.

**Constatări:**

| Element | Valoare |
|---|---|
| Sistem de operare | macOS 26.5.2 (build 25F84), Apple Silicon arm64, 16 GB RAM |
| Node.js | v26.10.0 (linia 26 a devenit LTS la 2026-10-28) |
| npm | 11.19.1 |
| Git | 2.50.1 (Apple Git-155) |
| Xcode | neinstalat (doar Command Line Tools) |
| Android SDK | neinstalat |
| Watchman | neinstalat (opțional) |
| Python | 3.9.6 (Python-ul sistemului; nefolosit în Faza 1) |

**Versiuni Expo verificate în registrul npm:** `expo@58.0.21` (SDK 58, lansat la 2026-09-29), `react-native@0.88.1`, `react@19.3.0`, `create-expo-app@5.0.0`.

**Decizii:** Expo SDK 58, deoarece Expo Go suportă doar ultimul SDK. Șablonul `blank-typescript`, deoarece Expo Router se amână până la al doilea ecran. npm ca manager de pachete. Detalii în `03-tech-decisions.md` (Checkpoint 4).

**Limitări:** fără Xcode nu există simulator iOS și nici Development Build local.

---

## 2026-10-31 — Faza 1, Checkpoint 2: Inițializarea proiectului mobil

**Context:** repository-ul Git a fost inițializat manual de autoare (branch `main`, remote `origin` pe GitHub, commit inițial `e34744b`). Pasul `git init` nu a fost repetat.

**Comenzi executate:**

```bash
npx create-expo-app@5.0.0 mobile --template blank-typescript@sdk-58
npx expo install --check        # "Dependencies are up to date"
npx expo-doctor                 # 20/20 checks passed
npm audit                       # 8 vulnerabilități (5 low, 3 high), vezi mai jos
npm install                     # sincronizarea package-lock.json după redenumire
npm run typecheck               # tsc --noEmit, exit code 0
npx tsc --showConfig            # confirmă "strict": true
CI=1 npx expo export --platform ios --output-dir <scratchpad>   # bundle iOS: 618 module, 1.6 MB Hermes bytecode
CI=1 npx expo start --port 8081 # Metro pornește; /status → "packager-status:running"
```

**Modificări manuale după generare:**
- `mobile/package.json`: `name` → `pocket-tennis-coach-mobile`; scripturi noi `typecheck` (`tsc --noEmit`) și `doctor` (`npx expo-doctor`).
- `mobile/app.json`: `name` → `PocketTennisCoach`, `slug` → `pocket-tennis-coach`.

**Versiuni instalate efectiv:** expo ~58.0.21, react-native 0.88.1, react 19.3.0, expo-status-bar ~58.0.4, typescript ~6.0.3, @types/react ~19.3.0.

**Verificat efectiv (pe acest Mac, fără dispozitiv):** typecheck, expo-doctor, compilarea bundle-ului JavaScript pentru iOS, pornirea serverului Metro.

**Neverificat:** rularea pe un dispozitiv fizic sau pe un simulator.

**Probleme deschise:**
1. `npm audit` raportează vulnerabilități tranzitive în uneltele de dezvoltare Expo (`deepmerge` prin `@expo/config`, `zod` prin `@expo/cli`). Fix-ul propus (`npm audit fix --force`) ar retrograda proiectul la `expo@51`, deci NU a fost aplicat. Pachetele afectate rulează în CLI-ul de dezvoltare, nu în aplicația livrată. Monitorizăm patch-urile SDK 58.
2. Șablonul a generat fișiere suplimentare: `mobile/AGENTS.md`, `mobile/.claude/settings.json` și `mobile/LICENSE` (licența MIT a șablonului Expo, copyright 650 Industries). Decizia de păstrare sau eliminare este în așteptare.
3. `.gitignore`-ul de la rădăcina repository-ului (secrete, `.env`, date generate) se creează în Checkpoint 4.
