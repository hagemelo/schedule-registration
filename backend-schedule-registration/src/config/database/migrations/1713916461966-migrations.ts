import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1713916461966 implements MigrationInterface {
  name = 'Migrations1713916461966';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."Candidato_ano_escolar_enum" AS ENUM('6º do ef', '7º do ef', '8º do ef', '9º do ef', '1º do em', '2º do em', '3º do em')`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."Candidato_posto_graduacao_enum" AS ENUM('gen ex', 'gen div', 'gen bda', 'cel', 'ten cel', 'maj', 'cap', '1º ten', '2º ten', 's ten', '1º sgt', '2º sgt', '3º sgt', 'civil')`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."Candidato_itinerario_informativo_enum" AS ENUM('Carreira Universitária (cauni)', 'Carreira Militar (camil)')`,
    );
    await queryRunner.query(
      `CREATE TABLE "Candidato" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "cpf" character varying NOT NULL, "cpf_responsavel" character varying NOT NULL, "tel_responsavel" character varying NOT NULL, "email_responsavel" character varying NOT NULL, "nome_responsavel" character varying NOT NULL, "ano_escolar" "public"."Candidato_ano_escolar_enum" NOT NULL, "colegio" character varying NOT NULL, "posto_graduacao" "public"."Candidato_posto_graduacao_enum" NOT NULL, "itinerario_informativo" "public"."Candidato_itinerario_informativo_enum" NOT NULL, CONSTRAINT "PK_6c345e61a38768cdd24232da44e" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "Agenda_disponivel" ("id" SERIAL NOT NULL, "dia" character varying NOT NULL, "hora" character varying NOT NULL, "candidate_id" integer, CONSTRAINT "REL_21d267f26aa23e4b35f053e328" UNIQUE ("candidate_id"), CONSTRAINT "PK_74afb850b4e0ab5b512648f6b20" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "Agenda_disponivel" ADD CONSTRAINT "FK_21d267f26aa23e4b35f053e328a" FOREIGN KEY ("candidate_id") REFERENCES "Candidato"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "Agenda_disponivel" DROP CONSTRAINT "FK_21d267f26aa23e4b35f053e328a"`,
    );
    await queryRunner.query(`DROP TABLE "Agenda_disponivel"`);
    await queryRunner.query(`DROP TABLE "Candidato"`);
    await queryRunner.query(
      `DROP TYPE "public"."Candidato_itinerario_informativo_enum"`,
    );
    await queryRunner.query(
      `DROP TYPE "public"."Candidato_posto_graduacao_enum"`,
    );
    await queryRunner.query(`DROP TYPE "public"."Candidato_ano_escolar_enum"`);
  }
}
