import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
  Keyboard,
  Image,
  Switch,
} from "react-native";

import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";
import styles from "./styles";

class HeaderBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cnh: 0,
      cnhs: [
        { key: 1, name: "A" },
        { key: 2, name: "AB" },
        { key: 3, name: "AC" },
        { key: 4, name: "AD" },
        { key: 5, name: "AE" },
        { key: 6, name: "B" },
        { key: 7, name: "C" },
        { key: 8, name: "D" },
        { key: 9, name: "E" },
      ],
      uf: 0,
      ufs: [
        {key:1,sigla:"AC",name:"Acre"},
        {key:2,sigla:"AL",name:"Alagoas"},
        {key:3,sigla:"AP",name:"Amapá"},
        {key:4,sigla:"AM",name:"Amazonas"},
        {key:5,sigla:"BA",name:"Bahia"},
        {key:6,sigla:"CE",name:"Ceará"},
        {key:7,sigla:"DF",name:"Distrito Federal"},
        {key:8,sigla:"ES",name:"Espírito Santo"},
        {key:9,sigla:"GO",name:"Goiás"},
        {key:10,sigla:"MA",name:"Maranhão"},
        {key:11,sigla:"MT",name:"Mato Grosso"},
        {key:12,sigla:"MS",name:"Mato Grosso do Sul"},
        {key:13,sigla:"MG",name:"Minas Gerais"},
        {key:14,sigla:"PA",name:"Pará"},
        {key:15,sigla:"PB",name:"Paraíba"},
        {key:16,sigla:"PR",name:"Paraná"},
        {key:17,sigla:"PE",name:"Pernambuco"},
        {key:18,sigla:"PI",name:"Piauí"},
        {key:19,sigla:"RJ",name:"Rio de Janeiro"},
        {key:20,sigla:"RN",name:"Rio Grande do Norte"},
        {key:21,sigla:"RS",name:"Rio Grande do Sul"},
        {key:22,sigla:"RO",name:"Rondônia"},
        {key:23,sigla:"RR",name:"Roraima"},
        {key:24,sigla:"SC",name:"Santa Catarina"},
        {key:25,sigla:"SP",name:"São Paulo"},
        {key:26,sigla:"SE",name:"Sergipe"},
        {key:27,sigla:"TO",name:"Tocantins"},
      ],
      area: 0,
      areas: [
        { key: 1, name: "Advogado" },
        { key: 2, name: "Analista de Sistemas" },
        { key: 3, name: "Dentista" },
        { key: 4, name: "Engenheiro" },
        { key: 5, name: "Fisioterapeuta" },
        { key: 6, name: "Geólogo" },
        { key: 7, name: "Médico" },
        { key: 8, name: "Professor" },
      ],
      nome: "",
      save_nome: "",

      telefone: "",
      save_telefone: "",

      email: "",
      save_email: "",

      endereco: "",
      save_endereco: "",

      area_atuacao: "",
      save_area_atuacao: "",

      habilitacao: false,
      save_habilitacao: false,

      pretensao_sal: 0,
      save_pretensao_sal: 0,

      save: false,
    };
  }

  runAlert() {
    let hab = this.state.habilitacao ? "Sim" : "Não";
    var categ =
      "Categoria: " + this.state.habilitacao
        ? this.state.cnhs[this.state.cnh].name
        : "/";
    let data =
      "Nome : " +
      this.state.nome +
      "\n" +
      "Telefone: " +
      this.state.telefone +
      "\n" +
      "E-mail: " +
      this.state.email +
      "\n" +
      "Residência: " +
      this.state.ufs[this.state.uf].name +
      " / " +
      this.state.ufs[this.state.uf].sigla +
      "\n" +
      "Área de Atuação: " +
      this.state.areas[this.state.area].name +
      "\n" +
      "Pretensão Salarial: R$ " +
      this.state.pretensao_sal +
      "\n";

    data += "Habilitação: " + hab + "\n";
    this.state.habilitacao ? (data += "Categoria: " + categ) : "" + "\n";

    Alert.alert("Deseja salvar os dados?", data, [
      {
        text: "Não",
        onPress: () => {},
      },
      {
        text: "Sim",
        onPress: () => {
          this.setState({
            save_nome: this.state.nome,
            save_telefone: this.state.telefone,
            save: true,
          });
          Keyboard.dismiss();
        },
      },
    ]);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.barraSuperior}>
            <Text style={styles.titulo}>RH-Recrutamento</Text>
          </View>
          <Text style={styles.texto}>Nome</Text>
          <TextInput
            style={styles.contorno}
            placeholder="   Digite seu nome"
            onChangeText={(text) => this.setState({ nome: text })}
          />
          <Text style={styles.texto}>Telefone/Celular (XX) XXXX-XXXX)</Text>
          <TextInput
            style={styles.contorno}
            placeholder="   Digite seu telefone/celular "
            onChangeText={(text) => this.setState({ telefone: text })}
            keyboardType="numeric" // Apenas Números (Teclado)
          />
          <Text style={styles.texto}>Endereço Eletrônico (e-mail)</Text>
          <TextInput
            style={styles.contorno}
            placeholder="   Digite seu e-mail"
            onChangeText={(text) => this.setState({ email: text })}
            onlowe
            // keyboardType="email" // Apenas Números (Teclado)
          />
          <Text style={styles.texto}>Local Residência</Text>
          <View style={styles.contorno}>
            <Picker
              selectedValue={this.state.uf}
              onValueChange={(item, index) => this.setState({ uf: index })}
            >
              {this.state.ufs.map((item, index) => {
                return (
                  <Picker.Item
                    style={styles.item}
                    key={index}
                    value={item}
                    label={item.name}
                  />
                );
              })}
            </Picker>
          </View>
          <Text style={styles.texto}>Área de Atuação</Text>
          <View style={styles.contorno}>
            <Picker
              selectedValue={this.state.area}
              onValueChange={(item, index) => this.setState({ area: index })}
            >
              {this.state.areas.map((item, index) => {
                return (
                  <Picker.Item
                    style={styles.item}
                    key={index}
                    value={item}
                    label={item.name}
                  />
                );
              })}
            </Picker>
          </View>

          <View style={styles.contorno}>
            <Text style={styles.texto}> Possui Habilitação?</Text>
            <Switch
              style={styles.check}
              trackColor={{ false: "#808080", true: "#C0C0C0" }}
              thumbColor={this.state.habilitacao ? "#1C1C1C" : "#C0C0C0"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() =>
                this.setState({ habilitacao: !this.state.habilitacao })
              }
              value={this.state.habilitacao}
            />
          </View>

          {/* Renderização Condicional */}
          {this.state.habilitacao ? (
            <Text style={styles.texto}>Categoria</Text>
          ) : null}

          {this.state.habilitacao ? (
            <View style={styles.contorno}>
              <Picker
                selectedValue={this.state.cnh}
                onValueChange={(item, index) => this.setState({ cnh: index })}
              >
                {this.state.cnhs.map((item, index) => {
                  return (
                    <Picker.Item
                      style={styles.item}
                      key={index}
                      value={item}
                      label={item.name}
                    />
                  );
                })}
              </Picker>
            </View>
          ) : null}

          <Text style={styles.texto}>
            {" "}
            Pretensão Salarial: R${" "}
            {parseFloat(this.state.pretensao_sal.toFixed(2))}
          </Text>
          <View style={styles.contorno}>
            <Slider
              style={{ width: 300, height: 40 }}
              minimumValue={0}
              maximumValue={10000}
              minimumTrackTintColor="#888"
              maximumTrackTintColor="#888"
              value={this.state.pretensao_sal}
              onValueChange={(value) =>
                this.setState({ pretensao_sal: parseFloat(value.toFixed(2)) })
              }
            />
          </View>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => {
              this.runAlert();
            }}
          >
            <Image source={require("../../img/ok.png")} />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

export default HeaderBar;
