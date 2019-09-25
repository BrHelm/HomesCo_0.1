<ImageBackground source={require('../temp/login.png')} style={[styles.container, styles.center]}>
        <KeyboardAvoidingView style={{ flex: 1, width: '100%'}} behavior={"padding"} >
          <ScrollView style={[{ width: '100%' }]} contentContainerStyle={styles.center}>
            <Image style={styles.logoCircle} source={require('../assets/logo-2.png')} />
            <Image style={styles.logoText} source={require('../assets/logo.png')} />
            <TextInput
              style={[styles.textInputA, styles.border, {}]}
              value={this.props.user.email}
              onChangeText={input => this.props.updateEmail(input)}
              placeholderTextColor='rgb(3,3,2)'
              placeholder='Email'
            />
            <TextInput
              style={[styles.border, {color: 'black'}]}
              value={this.props.user.password}
              onChangeText={input => this.props.updatePassword(input)}
              placeholderTextColor='rgb(3,3,2)'
              placeholder='Password'
              secureTextEntry={true}
            />
            <TouchableOpacity style={[styles.buttonSignup]} onPress={() => this.props.navigation.navigate('Signup')}>
              <Text style={styles.textA}>signup</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonForgot} onPress={() => this.props.navigation.navigate('Reset')}>
              <Text style={styles.textA}>forgot password?</Text>              
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonLogin]} onPress={() => this.props.login()}>
              <Text style={styles.textA}> login </Text>
            </TouchableOpacity>
            </ScrollView></KeyboardAvoidingView>
            {/* <TouchableOpacity style={styles.buttonFacebook} onPress={() => this.props.facebookLogin()}>
              <Text style={styles.textA}>facebook login</Text>
            </TouchableOpacity> */}
      </ImageBackground>